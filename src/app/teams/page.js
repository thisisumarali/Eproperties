import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import TeamV1 from '@/src/components/team/TeamV1';

export const metadata = {
    title: "Team Page - E-Properties Construction Building NextJS Template"
}

const Team = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Team Page" breadCrumb="team" />
            <TeamV1 showFull={true} teamclassName="inner-page" />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default Team;