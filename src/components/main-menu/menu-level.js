import React, { useState } from 'react'
import { xor } from 'lodash'
import styles from './main-menu.module.scss'
import MenuItem from './menu-item'

const MenuLevel = ({ items, className, isMainMenu }) => {
    const [expand, setExpand] = useState([]);

    const toggle = (idx) => {
        setExpand(xor(expand, [idx]));
    };

    return (
        <ul className={`${styles['main-nav']} ${className}`}>
            {items.map((item, idx) => <MenuItem item={item}
                                                idx={idx}
                                                expand={expand}
                                                toggle={toggle}
                                                key={idx}
                                                isMainMenu={isMainMenu}
            />)}
        </ul>
    )
}

export default MenuLevel
