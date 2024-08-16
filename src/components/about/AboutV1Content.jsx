import Image from 'next/image';
import React from 'react';
import SingleProgress from './SingleProgress';
import SingleAboutV1 from './SingleAboutV1';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import AboutV1Data from '../../../public/assets/jsonData/about/AboutV1Data.json'
import AboutProgressData from '../../../public/assets/jsonData/about/AboutProgressData.json'
import sectionShape from '@/public/assets/images/about/section-shape.png'

const AboutV1Content = () => {
    return (
        <>
            <div className="section-title">
                <div className="section-shape">
                    <Image src={sectionShape} alt="image" />
                </div>
                <div className="section-sub-title">
                    <h4>Superior Construction</h4>
                </div>
                <div className="section-main-title about">
                    <h2>We Make Finest Architectural</h2>
                    <h2>Design With Great Passion</h2>
                </div>
            </div>
            <div className="about-content animate__animated animate__slideInUp">
                <div className="about-discribtion">
                    <p>Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla a lobortis lectus, id volutpat magna. Morbi consequat porttitor fermentum. Nulla vestibulum tincidunt viverra. Vestibulum accumsan</p>
                </div>

                <div className="process-ber-plugin">
                    <div className="progress-items">
                        {AboutProgressData.map(progress =>
                            <SingleProgress progress={progress} key={progress.id} />
                        )}
                    </div>
                </div>
                <div className="row">
                    {AboutV1Data.map(about =>
                        <div className="col-lg-6 col-md-6" key={about.id}>
                            <SingleAboutV1 about={about} />
                        </div>
                    )}
                </div>
                <div className="eulding-btn about">
                    <Link href="#" onClick={handleSmoothScroll}>Read More <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                </div>
            </div>
        </>
    );
};

export default AboutV1Content;