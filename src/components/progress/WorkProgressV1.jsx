import React from 'react';
import sectionShape from '@/public/assets/images/about/section-shape.png'
import Image from 'next/image';
import WorkProgressV1Data from '../../../public/assets/jsonData/progress/WorkProgressV1Data.json'
import SingleWorkProgressV1 from './SingleWorkProgressV1';

const WorkProgressV1 = () => {
    return (
        <>
            <div className="work-process-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="section-shape">
                                    <Image src={sectionShape} alt="image" />
                                </div>
                                <div className="section-sub-title">
                                    <h4>Working Process</h4>
                                </div>
                                <div className="section-main-title work">
                                    <h2>Check How We Work in </h2>
                                    <h2>Easy Steps</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {WorkProgressV1Data.progressData.map(progress =>
                            <div className="col-lg-4 col-md-6" key={progress.id}>
                                <SingleWorkProgressV1 progress={progress} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkProgressV1;