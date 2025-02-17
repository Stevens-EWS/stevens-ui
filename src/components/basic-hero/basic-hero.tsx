import React from 'react'
import ContainerComponent from '../containers/container-component'
import styles from './basic-hero.module.scss'

export interface BasicHeroProps {
    title: string;
  }
  
const BasicHero = ContainerComponent( (props: BasicHeroProps) => {
    return (
        <div className={styles['f--page-title']}>
            <h1>{props.title}</h1>
        </div>
    )
}, {
    WrapperTag: 'div',
    wrapperClass: 'basic-hero',
    styles
})

export default BasicHero
