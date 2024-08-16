
import React from 'react';
import NotFoundContent from '../components/NotFound/NotFoundContent';
import FooterV1 from '../components/footer/FooterV1';
import HeaderV2 from '../components/header/HeaderV2';

export const metadata = {
    title: "404 Error - E-Properties Construction Building NextJS Template"
}

const NotFound = () => {
    return (
        <>
            <HeaderV2 />
            <NotFoundContent />
            <FooterV1 />
        </>
    );
};

export default NotFound;