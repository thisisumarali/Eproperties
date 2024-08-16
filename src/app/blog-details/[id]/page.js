import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import BlogDetailsContent from '@/src/components/blog/BlogDetailsContent';
import BlogV1Data from '../../../../public/assets/jsonData/blog/BlogV1Data.json'
import HeaderV1 from '@/src/components/header/HeaderV1';
import NotFound from '../../not-found';

export const metadata = {
    title: "Blog Details - E-Properties Construction Building NextJS Template"
}

const SingleBlog = ({ params }) => {

    const { id } = params
    const data = BlogV1Data.blogData.filter(blog => blog.id === parseInt(id))[0]

    if (!data) {
        return NotFound();
    }

    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Blog Details" breadCrumb="blog-details" />
            <BlogDetailsContent blogInfo={data} />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default SingleBlog;