import { kebabCase, camelCase, trimEnd } from 'lodash'
// import {rewriteRegistry} from './api-config'
// import getConfig from 'next/config'

const assetUrls = [
    'assets.ctfassets.net',
    'downloads.ctfassets.net'
]

/**
 * Get internal path for a page content type and slug.
 * @param contentTypeId
 * @param slug
 * @returns {string}
 */
const getInternalPath  = (contentTypeId, slug) => {
    contentTypeId = camelCase(contentTypeId)
    let prefix = kebabCase(contentTypeId)
    if (contentTypeId === 'pageArticle') {
        prefix = 'news'
    }
    if (contentTypeId === 'pagePublicationLanding') {
        return '/indicator'
    }
    if (contentTypeId === 'pageDirectory') {
        return '/directory'
    }
    if (contentTypeId === 'pagePublicationIssueListing') {
        prefix = 'indicator'
    }
    if (contentTypeId === 'pagePublicationArticle') {
        prefix = 'indicator'
    }
    if (contentTypeId === 'pageProgramListing') {
        return '/academics/program-finder'
    }
    if (contentTypeId === 'pageEventDetail') {
        prefix = 'events'
    }
    if (contentTypeId === 'pageProgramDetail') {
        prefix = 'program'
    }
    if (contentTypeId === 'pageProfile') {
        prefix = 'profile'
    }
    if (contentTypeId === 'pageHome') {
        return '/'
    }
    if (contentTypeId === 'pageAcademicCalendar') {
        prefix = 'office-of-the-registrar'
    }
    return `/${prefix}/${slug}`
}

/**
 * Get external (aliased) path for a page content type and slug.
 * @param contentTypeId
 * @param slug
 * @param absolute
 * @returns {*}
 */
const getExternalPath = (contentTypeId, slug, absolute=false) => {
    if (!contentTypeId || !slug) {
        return
    }
    const path = getInternalPath(camelCase(contentTypeId), slug)
    let resolvedPath = ''
    if (absolute) {
        const { publicRuntimeConfig } = getConfig()
        // const baseUrl = trimEnd(publicRuntimeConfig.baseUrl, '/')
        resolvedPath = `${baseUrl}${resolvedPath}`
    }
    return resolvedPath
}

/**
 * Massage asset url to be absolute and substitute for proxy domain if needed.
 * @param url
 * @returns {string}
 */
export function massageAssetUrl (url) {
    if (url) {
        if (url.startsWith('//')) {
            url = `https:${url}`
        }
        // const { publicRuntimeConfig } = getConfig()
        const assetBaseUrl = 'http://stevens.edu'
        if (assetBaseUrl) {
            return assetUrls.reduce((acc, assetUrl) => {
                if (acc.includes(assetUrl)) {
                    return acc.replace(assetUrl, assetBaseUrl)
                }
                return acc
            }, url)
        }
        return url
    }
    return ''
}

/**
 * Get href for a link that can be internal or external.
 * @param reference
 * @param link
 * @returns {string|*|string}
 */
const getHref = (reference, link) => {
    if (link) {
        return massageAssetUrl(link)
    }
    return reference ? getExternalPath(reference.__typename, reference.slug) : ''
}

export {
    getInternalPath,
    getExternalPath,
    getHref
}
