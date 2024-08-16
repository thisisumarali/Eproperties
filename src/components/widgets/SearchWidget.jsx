"use client"
import React from 'react';

const SearchWidget = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="widget_search box">
                <form onSubmit={handleSearch}>
                    <input type="text" name="s" placeholder="Search Here" title="Search for:" required autoComplete='off' />
                    <button type="submit" className="icons">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchWidget;