import React from 'react';
import AboutV1 from '@/src/components/about/AboutV1';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import ContactV1 from '@/src/components/contact/ContactV1';
import FaqV2 from '@/src/components/faq/FaqV2';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import TestimonialV2 from '@/src/components/testimonial/TestimonialV2';

export const metadata = {
    title: "About - E-Properties Construction Building  "
}

const About = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="About Us" breadCrumb="about" />
            <AboutV1 aboutclassName="inner-page" />
            <ContactV1 />
            <FaqV2 />
            <TestimonialV2 testimonialclassName="inner-page" />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default About;