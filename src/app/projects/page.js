import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import ProjectV1 from '@/src/components/project/ProjectV1';

export const metadata = {
    title: "Projects - E-Properties Construction Building"
}

const Projects = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Project Page" breadCrumb="Projects" />
            <ProjectV1 projectclassName="inner-page" />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default Projects;