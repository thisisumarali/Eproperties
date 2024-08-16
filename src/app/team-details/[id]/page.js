import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import TeamV1Data from '../../../../public/assets/jsonData/team/TeamV1Data.json'
import TeamDetailsContent from '@/src/components/team/TeamDetailsContent';
import NotFound from '../../not-found';
import HeaderV1 from '@/src/components/header/HeaderV1';

export const metadata = {
    title: "Team Details - E-Properties Construction Building NextJS Template"
}

const page = ({ params }) => {

    const { id } = params
    const data = TeamV1Data.teamData.filter(team => team.id === parseInt(id))[0]

    if (!data) {
        return NotFound();
    }

    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Team Details" breadCrumb="team-details" />
            <TeamDetailsContent teamInfo={data} />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default page;