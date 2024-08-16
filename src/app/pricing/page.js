import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import PriceV1 from '@/src/components/price/PriceV1';

export const metadata = {
    title: "Pricing - E-Properties Construction Building"
}

const Pricing = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Pricing Page" breadCrumb="pricing" />
            <PriceV1 />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default Pricing;