import { flatten, get, trimEnd, trimStart } from 'lodash'
// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()
const baseUrl = trimEnd("http://stevens.edu", '/')

/**
 * Collects hook results from instances of components using data.
 *
 * @param components
 * @param hook
 * @param {object=null} context
 * @returns {*}
 */
export function collectHooks(components, hook) {
    return  components.reduce((acc, component) => {
        if (component[hook]) {
            acc[component.typeName] = component[hook]
        }
        return acc
    }, {})
}

/**
 * Get instances of a certain type from data.
 *
 * @param data
 * @param type
 * @returns {*[]}
 */
export function findTypeInstances(data, type) {
    return findPathRecursive(data, obj => obj?.__typename === type)
        .map(path => get(data, trimStart(path, ".")))
}

/**
 * Recursive function to get path to a selected component within data object.
 *
 * @param data
 * @param checker
 * @param path
 * @returns {string|Array}
 */
export function findPathRecursive (data, checker, path='') {
    if (checker(data)) {
        return path
    }
    if (Array.isArray(data)) {
        return flatten(data.map((row, idx) => findPathRecursive(row, checker, `${path}[${idx}]`)).filter(val => val))
    }
    else if (data && typeof data === 'object') {
        return flatten(Object.keys(data).map((key) => findPathRecursive(data[key], checker, `${path}.${key}`)).filter(val => val))
    }
}

/**
 * Chech if the page is in active Main menu path.
 * @param menuItem - menu item object
 * @param typeName - content type name
 * @param slug - content slug
 * @returns {boolean}
 */
function checkActivePath (menuItem, typeName, slug) {
    const isCurrentPage = (item) =>  item.page.__typename === typeName && item.page.slug === slug
    if (menuItem?.page && isCurrentPage(menuItem)) {
        menuItem.isActive = true
        menuItem.isActivePath = true
        return true
    }
    else if (menuItem?.children && getActiveMenuPath(menuItem.children, typeName, slug)) {
        menuItem.isActivePath = true
        return true
    }
    return false
}

/**
 * Get active menu path.
 * @param data Menu data
 * @param typeName Page type name
 * @param slug Page slug
 * @returns {boolean}
 */
export function getActiveMenuPath (data, typeName, slug) {
    let result = false
    data?.itemsCollection.items.forEach(item => {
        if (checkActivePath(item, typeName, slug)) {
            result = true
        }
    })
    return result
}

/**
 * Get external link attributes.
 * @param externalLink
 * @returns {{rel: string, target: string}}
 */
export function getExternalLinkAttributes (externalLink) {
    return externalLink ? {
        target: '_blank',
        rel: 'noreferrer nofollow'
    } : {}
}

/**
 * Parse phone number.
 * @param phone
 * @returns {`(${*}) ${*}-${*}`}
 */
export const phoneParsed = (phone) => {
    phone = phone.replace(/\D/g, '')
    const parts = phone?.match(/1(\d{3})(\d{3})(\d{4})/)
    return `(${parts[1]}) ${parts[2]}-${parts[3]}`
}

/**
 * Parse fax number.
 * @param fax
 * @returns {`(${*}) ${*}-${*}`}
 */
export const faxParsed = (fax) => {
    const parts = fax?.match(/1(\d{3})(\d{3})(\d{4})/)
    return `(${parts[1]}) ${parts[2]}-${parts[3]}`
}

/**
 * Get image url.
 * @param url
 * @param width
 * @param height
 * @param fit
 * @param focal
 * @returns {string}
 */
export const getImageUrl = (url, width, height, fit = 'fill', focal = 'faces') => {
    if (!url) {
        return ''
    }
    url = `${url}?w=${width}${height ? `&h=${height}` : ''}&f=${focal}&q=80&fit=${fit}`
    const params = `&w=1024&q=80`
    return  `${baseUrl}/_next/image?url=${encodeURIComponent(url)}${params}`
}
