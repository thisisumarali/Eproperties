"use client"
import React, { useEffect } from 'react';

const Dependency = () => {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.js')
    })

    return (
        <>

        </>
    );
};

export default Dependency;