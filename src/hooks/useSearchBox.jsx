"use client"

import { useState } from "react";

const useSearchBox = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchOpen = () => {
        setIsSearchOpen(true);
        document.body.classList.add('search-active');
    };

    const handleSearchClose = () => {
        setIsSearchOpen(false);
        document.body.classList.remove('search-active');
    };

    return { isSearchOpen, handleSearchOpen, handleSearchClose }
};

export default useSearchBox;