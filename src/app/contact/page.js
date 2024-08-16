import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import ContactContent from '@/src/components/contact/ContactContent';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';

export const metadata = {
    title: "Contact - E-Properties Construction Building "
}

const Contact = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Contact Us" breadCrumb="contact" />
            <ContactContent />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default Contact;