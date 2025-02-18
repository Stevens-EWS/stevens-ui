import React from 'react'
import { getHref } from '../../lib/url-manager'
// import Link from 'next/link'
import styles from './footer-main-menu.module.scss'
import { getExternalLinkAttributes } from '../../lib/utils'

const FooterMenuLevel = ({ items, className }) => {

    return (
        <ul className={`${styles['main-nav']} ${className}`}>
            {items.map((item, idx) => {
                const classes = [
                    item.isActive && 'is-active',
                    item.isActivePath && 'is-active-path',
                    item.externalLink && 'external-link'
                ].filter(item => item)

                const url = getHref(item.page, item.externalLink)

                return (
                    <li key={idx} className={styles['menu-item']}>
                            {url ?
                                    <a href={url} className={classes.join(' ')}
                                       {...getExternalLinkAttributes(item.externalLink)}
                                    >{item.title}</a>
                               
                                : <span className={classes.join(' ')}>{item.title}</span>
                            }



                        {item.children &&
                            <div className={styles['submenu-wrapper']}>
                                <div className={styles['inner-wrapper']}>
                                    <div className={styles['text-wrapper']}>
                                        <h3>{item.title}</h3>

                                        {item.description &&
                                            <div className={styles['f--description']}>{item.description}</div>
                                        }
                                    </div>

                                    <FooterMenuLevel items={item.children.itemsCollection.items} />
                                </div>
                            </div>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default FooterMenuLevel
