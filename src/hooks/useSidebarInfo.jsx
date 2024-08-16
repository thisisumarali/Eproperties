"use client"

import { useState } from "react";

const useSidebarInfo = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setIsSidebarOpen(true)
    }

    const handleSidebarClose = () => {
        setIsSidebarOpen(false)
    }

    return { isSidebarOpen, handleSidebarOpen, handleSidebarClose }
};

export default useSidebarInfo;