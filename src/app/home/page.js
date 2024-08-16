import React from 'react';
import AboutV1 from '@/src/components/about/AboutV1';
import BannerV1 from '@/src/components/banner/BannerV1';
import BrandV1 from '@/src/components/brand/BrandV1';
import ContactV1 from '@/src/components/contact/ContactV1';
import FaqV1 from '@/src/components/faq/FaqV1';
import FeatureV1 from '@/src/components/feature/FeatureV1';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import PriceV1 from '@/src/components/price/PriceV1';
import ProjectV1 from '@/src/components/project/ProjectV1';
import ServiceV1 from '@/src/components/service/ServiceV1';
import TestimonialV1 from '@/src/components/testimonial/TestimonialV1';

export const metadata = {
    title: "Home - E-Properties Construction Building "
}

const Home = () => {
    return (
        <>
            <HeaderV1 />
            <BannerV1 />
            <FeatureV1 />
            <AboutV1 />
            <ContactV1 />
            <ServiceV1 />
            <PriceV1 />
            <FaqV1 />
            <BrandV1 />
            <ProjectV1 />
            <TestimonialV1 />
            <FooterV1 />
        </>
    );
};

export default Home;