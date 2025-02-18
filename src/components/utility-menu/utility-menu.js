import React from 'react'
// import { getMenuWithActivePath } from '../../lib/api'
import MenuLevel from './menu-level'

const UtilityMenu = ({data}) => {
    return(
        <MenuLevel items={data.itemsCollection.items}/>
    )
}

// UtilityMenu.getData = (typeName, slug, preview) => {
//     return getMenuWithActivePath(typeName, slug, 'Utility Menu', 2, preview, 15)
// }

export default UtilityMenu
