import React from 'react';
import serviceDetails1 from '@/public/assets/images/service/service-details1.jpg'
import serviceDetails2 from '@/public/assets/images/service/service-details2.jpg'
import Image from 'next/image';
import SearchWidget from '../widgets/SearchWidget';
import CategoriesWidget from '../widgets/CategoriesWidget';
import TagsWidget from '../widgets/TagsWidget';

const ServiceDetailsContent = () => {
    return (
        <>
            <div className="service-details-area animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="service-details-single-box mb-30">
                                        <div className="service-details-thumb">
                                            <Image src={serviceDetails1} alt="image" />
                                        </div>
                                        <div className="service-details-content">
                                            <h4>Building smart business solution for you</h4>
                                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum a quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed sed efficitur turpis gilla sed sit amet eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="service-details-single-box">
                                        <div className="service-details-thumb">
                                            <Image src={serviceDetails2} alt="image" />
                                        </div>
                                        <div className="service-details-content">
                                            <h4>Building Everything Best</h4>
                                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum a quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed sed efficitur turpis gilla sed sit amet eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-30 mt-lg-0">
                            <SearchWidget />
                            <CategoriesWidget />
                            <TagsWidget />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;