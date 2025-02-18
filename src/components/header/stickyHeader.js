import { useState, useEffect, useRef, useCallback } from 'react';

const StickyHeader = (defaultSticky = false) => {
    const [isSticky, setIsSticky] = useState(defaultSticky);
    const menuRef = useRef(null);

    const toggleSticky = useCallback(
        ({ top }) => {
            if ((window.innerWidth > 1023 && top + 1 <= 60) || (window.innerWidth < 1024 && top + 1 <= 50)) {
                !isSticky && setIsSticky(true);
            } else {
                isSticky && setIsSticky(false);
            }
        }, [isSticky]
    );

    useEffect(() => {
        const handleScroll = () => {
            toggleSticky(menuRef.current?.getBoundingClientRect());
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [toggleSticky]);

    return { menuRef, isSticky };
};

export default StickyHeader;
