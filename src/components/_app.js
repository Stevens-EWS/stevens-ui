import React, {useEffect, createContext, useState} from 'react'
import '../styles/normalize/_normalize.scss'

export const MainMenuContext = createContext({isOpen: false})

function Stevens ({ Component, pageProps }) {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        TagManager.initialize({ gtmId });
    }, []);
    return (
        <MainMenuContext.Provider value={{ isOpen, setIsOpen }}>
            <Component {...pageProps} />
        </MainMenuContext.Provider>
    )
}

export default Stevens
