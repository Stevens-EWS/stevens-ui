import React, { useEffect, useState, useCallback, useRef, useContext } from 'react'
import ContainerComponent from '../containers/container-component'
import styles from './header.module.scss'
// import NotificationBanner from '../notification-banner/notification-banner'
import MainMenu from '../main-menu/main-menu'
import UtilityMenu from '../utility-menu/utility-menu'
import HeaderLogo from '../logo/logo'
import StickyHeader from './stickyHeader'
// import Link from 'next/link'
import { MainMenuContext } from '../_app'

export interface HeaderProps {
    menus: object;
  }

const Header = ContainerComponent((props: HeaderProps) =>  {
    const MenuModel = useContext(MainMenuContext)
    const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false)
    const { menuRef, isSticky } = StickyHeader()
    const hambRef = useRef()
    const mobileRef = useRef()
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (mobileRef.current && !mobileRef.current.contains(e.target) && !hambRef.current.contains(e.target)) {
                setMobileMenuExpanded(false)
                MenuModel?.setIsOpen(false)
                document.body.classList.remove('menu-expand')
            }
        }
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [mobileRef])

    const escFunction = useCallback((e) => {
        if (e.key === 'Escape') {
            setExpandMenu(false)
            hambRef.current.focus()
            document.body.classList.remove('menu-expand')
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false)

        return () => {
            document.removeEventListener('keydown', escFunction, false)
        };
    }, [])

    const toggle = () => {
        MenuModel?.setIsOpen(!MenuModel?.isOpen)
        setMobileMenuExpanded(!mobileMenuExpanded)
        !mobileMenuExpanded ? document.body.classList.add('menu-expand') : document.body.classList.remove('menu-expand')
    };

    const handleBlur = (e) => {
        const currentTarget = e.currentTarget

        // Give browser time to focus the next element
        requestAnimationFrame(() => {
            // Check if the new focused element is a child of the original container
            if (!currentTarget.contains(document.activeElement)) {
                MenuModel?.setIsOpen(false)
            }
        })
    }

    useEffect(() => {
        (mobileMenuExpanded && MenuModel?.isOpen) ? document.body.classList.add('menu-expand') : document.body.classList.remove('menu-expand')
        menuRef.current.scrollTo(0,0)
    }, [mobileMenuExpanded, MenuModel?.isOpen])

    // const isBanner = React.isValidElement(<NotificationBanner />)
    let scrollClass = isSticky ? 'scroll' : ''
    let hoverClass = isHover ? 'hover' : isHover ? 'hover-alternate' : ''

    return (
        <>
            {/* <NotificationBanner /> */}

            {(isSticky || (isHover && window.innerWidth >= 1024)) &&
                <div className={styles['header-placeholder']}></div>
            }

            <div className={`${styles['header-bg-container']} ${styles[scrollClass]} ${styles[hoverClass]}`}></div>

            <div className={`${styles['header-wrapper']} ${styles[scrollClass]} ${styles[hoverClass]}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onBlur={handleBlur}>
                <div className={styles['logo-wrapper']}>
                    <HeaderLogo />
                </div>

                <div className={styles['mobile-nav']}>
                    <button className={`${styles['hamburger-button']} ${MenuModel?.isOpen ? styles['open'] : ''}`} ref={hambRef} onClick={() => toggle()} aria-label="Toggle Main Menu">
                        <svg className={styles['close-icon']} height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.4719587.08885563 1.4142136 1.41421357-7.4843167 7.48478643 7.4843167 7.48410307-1.4142136 1.4142136-7.48410307-7.4843167-7.48478643 7.4843167-1.41421357-1.4142136 7.485-7.48410307-7.485-7.48478643 1.41421357-1.41421357 7.48478643 7.485z" fill="#fff" fillRule="evenodd"/>
                        </svg>
                        <svg className={styles['hamburger-icon']} height="14" viewBox="0 0 25 14" width="25" xmlns="http://www.w3.org/2000/svg">
                            <path d="m25 12v2h-25v-2zm-5-6v2h-20v-2zm5-6v2h-25v-2z" fill="#fff" fillRule="evenodd"/>
                        </svg>
                    </button>
                    
                        <a href='http://search.stevens.edu/' className={styles['search-button']} aria-label="Stevens Search">
                            <svg height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                                <path d="m7.61742592 0c4.20698818 0 7.61742588 3.41043775 7.61742588 7.61742592 0 1.73730244-.5815919 3.33876678-1.560699 4.62031618l5.3258472 5.3259023-1.4363556 1.4363556-5.3259023-5.3258472c-1.2815494.9791071-2.88301374 1.560699-4.62031618 1.560699-4.20698817 0-7.61742592-3.4104377-7.61742592-7.61742588 0-4.20698817 3.41043775-7.61742592 7.61742592-7.61742592zm0 2.03131358c-3.08512466 0-5.58611234 2.50098768-5.58611234 5.58611234 0 3.08512468 2.50098768 5.58611238 5.58611234 5.58611238 3.08512468 0 5.58611238-2.5009877 5.58611238-5.58611238 0-3.08512466-2.5009877-5.58611234-5.58611238-5.58611234z" fill="#fff" fillRule="evenodd"/>
                            </svg>
                        </a>
                   
                </div>

                <div className={`${styles['nav-wrapper']} ${MenuModel?.isOpen ? styles['show-nav'] : ''}`} ref={mobileRef}>
                    <div className={styles['top-nav-wrapper']}>
                        {props.menus?.utilityMenu &&
                            <UtilityMenu data={props.menus.utilityMenu}/>
                        }
                        
                            <a href='http://search.stevens.edu/' className={styles['search-button']} aria-label="Stevens Search">
                                <svg height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m7.61742592 0c4.20698818 0 7.61742588 3.41043775 7.61742588 7.61742592 0 1.73730244-.5815919 3.33876678-1.560699 4.62031618l5.3258472 5.3259023-1.4363556 1.4363556-5.3259023-5.3258472c-1.2815494.9791071-2.88301374 1.560699-4.62031618 1.560699-4.20698817 0-7.61742592-3.4104377-7.61742592-7.61742588 0-4.20698817 3.41043775-7.61742592 7.61742592-7.61742592zm0 2.03131358c-3.08512466 0-5.58611234 2.50098768-5.58611234 5.58611234 0 3.08512468 2.50098768 5.58611238 5.58611234 5.58611238 3.08512468 0 5.58611238-2.5009877 5.58611238-5.58611238 0-3.08512466-2.5009877-5.58611234-5.58611238-5.58611234z" fill="#fff" fillRule="evenodd"/>
                                </svg>
                            </a>
                        
                    </div>
                    {props.menus?.mainMenu &&
                        <div className={styles['main-nav-wrapper']}>
                            <MainMenu data={props.menus.mainMenu}/>
                        </div>
                    }
                    {props.menus?.utilityMenu &&
                        <div className={styles['mobile-utility-nav']}>
                            <UtilityMenu data={props.menus.utilityMenu}/>
                        </div>
                    }
                </div>
            </div>
            <div ref={menuRef}></div>
        </>
    )
}, ({preview}) => ({
    WrapperTag: 'header',
    wrapperClass: 'header',
    variant: preview ? 'preview-links' : 'no-preview',
    styles
}))

export default Header
