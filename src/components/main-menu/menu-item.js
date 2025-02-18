import React, {useContext, useEffect, useState} from 'react'
import { getExternalPath, getHref } from '../../lib/url-manager'
import styles from './main-menu.module.scss'
// import Link from 'next/link'
import { useHoverIntent } from 'react-use-hoverintent'
import MenuLevel from './menu-level'
import { getExternalLinkAttributes } from '../../lib/utils'
import { MainMenuContext } from '../_app'

const MenuItem = ({ item, idx, expand, toggle, isMainMenu }) => {
    const MenuModel = useContext(MainMenuContext)

    const classes = [
        item?.isActive && 'is-active',
        item?.isActivePath && 'is-active-path',
        item?.externalLink && 'external-link'
    ].filter(item => item)

    const url = getHref(item?.page, item?.externalLink)

    const [isHovering, menuItem, setIsHovering] = useHoverIntent({
        timeout: 125,
        sensitivity: 5,
        interval: 125,
    })

    useEffect(() => {
        if (isMainMenu) {
            if (isHovering) {
                // MenuModel?.setIsOpen(true)
            }
        }
    }, [isMainMenu, isHovering])

    useEffect(() => {
        if (isMainMenu) {
            if (!MenuModel?.isOpen) {
                setIsHovering(false)
            }
        }
    }, [isMainMenu, MenuModel?.isOpen, setIsHovering])

    const handleClick = (e) => {
        // MenuModel.setIsOpen(false)
    }

    // Check window width
    let windowWidth;
    if (typeof window !== 'undefined') {
        windowWidth = window.innerWidth;
    }

    const [width, setWidth] = useState(windowWidth);

    function handleWindowSizeChange() {
        setWidth(windowWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 1023;

    const mouseLeaveHandler = (e) => {
        if (!isMobile) setIsHovering(false)
    };

    return (
        <>
            {item &&
                <li ref={menuItem} key={idx} className={`${styles['menu-item']} ${item?.children ? styles['has-submenu'] : ''} ${isHovering ? styles['hover'] : ''}`} onMouseLeave={mouseLeaveHandler}>
                    <div className={styles['link-wrapper']}>
                        {url
                            ? 
                                <a  href={url} className={classes.join(' ')}
                                {...getExternalLinkAttributes(item?.externalLink)}
                                    onClick={handleClick}
                                >{item?.title}</a>
                            
                            : <button className={classes.join(' ')}>{item?.title}</button>
                        }

                        {item?.children &&
                            <>
                                <svg height="15" viewBox="0 0 9 15" width="9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m18.3928571 19.3214286 6.2142858-6.2142857 1.2857142 1.2857142-7.5 7.5-7.5-7.5 1.2857143-1.2857142z" fill="#fff" fillRule="evenodd" transform="matrix(0 1 1 0 -13.107143 -10.892857)"/>
                                </svg>

                                <button key={item?.key} className={`${styles['submenu-arrow']} ${expand.includes(idx) ? styles['open'] : ''}`} onClick={() => toggle(idx)} aria-label="Toggle Submenu"></button>

                                <button key={item?.key} className={`${styles['submenu-arrow-touch']} ${expand.includes(idx) ? styles['open'] : ''}`} onClick={()=>MenuModel?.setIsOpen(true)} aria-label="Toggle Submenu">
                                    <svg height="15" viewBox="0 0 9 15" width="9" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m18.3928571 19.3214286 6.2142858-6.2142857 1.2857142 1.2857142-7.5 7.5-7.5-7.5 1.2857143-1.2857142z" fill="#fff" fillRule="evenodd" transform="matrix(0 1 1 0 -13.107143 -10.892857)"/>
                                    </svg>
                                </button>
                            </>
                        }
                    </div>

                    {item?.children &&
                        <div className={`${styles['submenu-wrapper']} ${expand.includes(idx) ? styles['show-nav'] : ''}`}>
                            <div className={styles['inner-wrapper']}>
                                <div className={styles['text-wrapper']}>
                                    <h3>{item?.title}</h3>

                                    {item?.description &&
                                        <div className={styles['f--description']}>{item?.description}</div>
                                    }
                                </div>

                                <MenuLevel items={item?.children.itemsCollection.items} />
                            </div>
                        </div>
                    }
                </li>
            }
        </>

    )
}

export default MenuItem
