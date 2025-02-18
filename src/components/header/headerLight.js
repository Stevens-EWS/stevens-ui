import React from 'react'
import ContainerComponent from '../containers/container-component'
import styles from './header.module.scss'
// import NotificationBanner from '../notification-banner/notification-banner'
import HeaderLogo from '../logo/logo'

const HeaderLight = ContainerComponent((props) =>  {
    return (
        <>
            {/* <NotificationBanner /> */}

            <div className={`${styles['header-wrapper']}`}>
                <div className={styles['logo-wrapper']}>
                    <HeaderLogo />
                </div>
            </div>
        </>
    )
}, ({preview}) => ({
    WrapperTag: 'header',
    wrapperClass: 'header',
    variant: preview ? 'preview-links' : 'no-preview',
    styles
}))

export default HeaderLight
