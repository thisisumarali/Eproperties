"use client"

import { useState } from 'react';

const useMobileSidebarMenu = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const openMobileSidebar = () => {
        setIsMobileSidebarOpen(true);
        document.body.classList.add('no-fade');
    };

    const closeMobileSidebar = () => {
        setIsMobileSidebarOpen(false);
        document.body.classList.remove('no-fade');
    };

    return { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar };
};

export default useMobileSidebarMenu