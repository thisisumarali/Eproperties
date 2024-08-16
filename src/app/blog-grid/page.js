import React from 'react';
import BlogV2 from '@/src/components/blog/BlogV2';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';

export const metadata = {
    title: "Blog Grid - E-Properties Construction Building NextJS Template"
}

const BlogGrid = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Blog Grid" breadCrumb="blog-grid" />
            <BlogV2 showFull={true} />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default BlogGrid;