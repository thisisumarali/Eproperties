import React from 'react';
import CallToActionVideo2 from '../video/CallToActionVideo2';

const CallToActionV2 = () => {
    return (
        <>
            <div className="call-do-action-area style-two animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="call-do-title style-two">
                                <h2>Offers Excellentcom Bination</h2>
                                <h2>of Location & Quality</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <CallToActionVideo2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CallToActionV2;