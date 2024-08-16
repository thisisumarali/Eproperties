import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import React from 'react';
import ProjectV1Data from '../../../../public/assets/jsonData/project/ProjectV1Data.json'
import ProjectDetailsContent from '@/src/components/project/ProjectDetailsContent';
import NotFound from '../../not-found';
import HeaderV1 from '@/src/components/header/HeaderV1';

export const metadata = {
    title: "Project Details - E-Properties Construction Building"
}

const SingleProject = ({ params }) => {

    const { id } = params
    const data = ProjectV1Data.projectData.filter(project => project.id === parseInt(id))[0]

    if (!data) {
        return NotFound();
    }

    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Project Details" breadCrumb="project-details" />
            <ProjectDetailsContent projectInfo={data} />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default SingleProject;