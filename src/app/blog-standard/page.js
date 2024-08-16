import React from 'react';
import BlogStandardContent from '@/src/components/blog/BlogStandardContent';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';

export const metadata = {
    title: "Blog Standard - E-Properties Construction Building NextJS Template"
}

const BlogStandard = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Blog Standard" breadCrumb="blog-standard" />
            <BlogStandardContent />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default BlogStandard;