import React from 'react'
// import { getMenuWithActivePath } from '../../lib/api'
import MenuLevel from './menu-level'

const MainMenu = ({ data }) => {
    return(
        <MenuLevel items={data.itemsCollection.items} isMainMenu={true}/>
    )
}

// MainMenu.getData = (typeName, slug, preview) => {
//     return getMenuWithActivePath(typeName, slug, 'Main Menu', 3, preview, 8)
// }

export default MainMenu
