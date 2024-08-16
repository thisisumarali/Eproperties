import React from 'react';
import ServiceV3Data from '../../../public/assets/jsonData/service/ServiceV3Data.json'
import Image from 'next/image';
import SingleServiceV3 from './SingleServiceV3';
import Link from 'next/link';
import sectionShape from '@/public/assets/images/about/section-shape.png'
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ServiceV3 = ({ showFull = false }) => {
    return (
        <>
            <div className="service-area style-three animate__slideInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="section-shape">
                                    <Image src={sectionShape} alt="image" />
                                </div>
                                <div className="section-sub-title">
                                    <h4>{ServiceV3Data.subTitle}</h4>
                                </div>
                                <div className="section-main-title">
                                    <h2>{ServiceV3Data.title1}</h2>
                                    <h2>{ServiceV3Data.title2}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {showFull ?
                            <>
                                {ServiceV3Data.serviceData.map(service =>
                                    <div className="col-lg-3 col-md-6" key={service.id}>
                                        <SingleServiceV3 service={service} />
                                    </div>
                                )}
                            </> :
                            <>
                                {ServiceV3Data.serviceData.slice(0, 4).map(service =>
                                    <div className="col-lg-3 col-md-6" key={service.id}>
                                        <SingleServiceV3 service={service} />
                                    </div>
                                )}
                            </>}
                    </div>
                    <div className="row align-items-center mt-40 animate__animated">
                        <div className="col-lg-6 col-md-6">
                            <div className="service-disctription">
                                <span><Link href="/service-details/1">Building</Link> Services Built Specifically Business</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="eulding-btn service">
                                <Link href="#" onClick={handleSmoothScroll}>Find More Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV3;