import React, { useState, useRef, useEffect, useContext } from 'react'
import { getExternalPath, getHref } from '../../lib/url-manager'
import { xor } from 'lodash'
// import Link from 'next/link'
import styles from './utility-menu.module.scss'
import { getExternalLinkAttributes } from '../../lib/utils'
import { MainMenuContext } from '../_app'

const MenuLevel = ({ items, className }) => {
    const ref = useRef(null);
    const MenuModel = useContext(MainMenuContext)
    const [expand, setExpand] = useState([])

    const toggle = (idx) => {
        setExpand(xor(expand, [idx]))
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                toggle()
            }
        }
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [ref])

    const handleClick = (e) => {
        // MenuModel.setIsOpen(false)
    }

    return(
        <ul className={`${styles['utility-nav']} ${className}`} ref={ref}>
            {items.map((item, idx) => {
                const classes = [
                    'menu-item-link',
                    item.isActive && 'is-active',
                    item.isActivePath && 'is-active-path'
                ].filter(item => item)

                return (
                    <li key={idx} className={styles['menu-item']}>
                        <div className={styles['link-wrapper']}>
                            {(item.page || item.externalLink)
                                ? 
                                    <a href={getHref(item.page, item.externalLink)} className={classes.join(' ')}
                                       onClick={handleClick}
                                       {...getExternalLinkAttributes(item.externalLink)}
                                    >{item.title}</a>
                             
                                : <button className={classes.join(' ')} onClick={() => toggle(idx)}>{item.title}</button>
                            }

                            {item.children &&
                                <>
                                    <button className={`${styles['submenu-arrow']} ${expand.includes(idx) ? styles['open'] : ''}`} onClick={() => toggle(idx)} aria-label="Toggle Submenu">
                                        <svg height="6" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m5 4.14285714 4.14285714-4.14285714.85714286.85714286-5 5-5-5 .85714286-.85714286z" fill="#fff" fillRule="evenodd"/>
                                        </svg>
                                    </button>
                                </>
                            }
                        </div>

                        {item.children &&
                            <div className={`${styles['submenu-wrapper']} ${expand.includes(idx) ? styles['show-nav'] : ''}`}>
                                <MenuLevel items={item.children.itemsCollection.items} />
                            </div>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuLevel
