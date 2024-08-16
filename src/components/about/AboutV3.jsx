import Image from 'next/image';
import React from 'react';
import aboutThumb from '@/public/assets/images/about/about3.png'
import sectionShape from '@/public/assets/images/about/section-shape.png'
import AboutV3Data from '../../../public/assets/jsonData/about/AboutV3Data.json'
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const AboutV3 = () => {
    return (
        <>
            <div className="about-area style-three animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-thumb animate__animated animate__slideInUp">
                                <Image src={aboutThumb} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <div className="section-shape">
                                    <Image src={sectionShape} alt="image" />
                                </div>
                                <div className="section-sub-title">
                                    <h4>{AboutV3Data.subTitle}</h4>
                                </div>
                                <div className="section-main-title about">
                                    <h2>{AboutV3Data.title1}</h2>
                                    <h2>{AboutV3Data.title2}</h2>
                                </div>
                            </div>
                            <div className="about-content animate__animated animate__slideInUp">
                                <div className="about-discribtion">
                                    <p>{AboutV3Data.text}</p>
                                </div>
                                <div className="about-list">
                                    <ul>
                                        {AboutV3Data.aboutCheckList.map(list =>
                                            <li key={list.id}><i className="bi bi-check2-circle"></i> {list}</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="about-bottom">
                                    <div className="eulding-btn about">
                                        <Link href="#" onClick={handleSmoothScroll}>{AboutV3Data.btnText}<i className={AboutV3Data.btnIcon}></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;