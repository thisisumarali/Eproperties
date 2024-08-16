import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import ServiceDetailsContent from '@/src/components/service/ServiceDetailsContent';
import ServiceV3Data from '../../../../public/assets/jsonData/service/ServiceV3Data.json'
import NotFound from '../../not-found';
import HeaderV1 from '@/src/components/header/HeaderV1';

export const metadata = {
    title: "Service Details - E-Properties Construction Building NextJS Template"
}

const SingleService = ({ params }) => {

    const { id } = params
    const data = ServiceV3Data.serviceData.filter(service => service.id === parseInt(id))[0]

    if (!data) {
        return NotFound();
    }

    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Service Details" breadCrumb="service-details" />
            <ServiceDetailsContent serviceInfo={data} />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default SingleService;