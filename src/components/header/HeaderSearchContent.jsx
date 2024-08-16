"use client"
import React from 'react';

const HeaderSearchContent = ({ handleSearchClose }) => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="search-popup">
                <button className="close-search style-two" onClick={handleSearchClose} scroll={false}><span className="flaticon-multiply"><i
                    className="far fa-times-circle"></i></span></button>
                <button className="close-search" onClick={handleSearchClose} scroll={false}><i className="fas fa-arrow-up"></i></button>
                <form onSubmit={handleSearch}>
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search Here" required />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default HeaderSearchContent;