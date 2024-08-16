import React from 'react';
import FeatureV2Data from '../../../public/assets/jsonData/feature/FeatureV2Data.json'
import SingleFeatureV2 from './SingleFeatureV2';

const FeatureV2 = () => {
    return (
        <>
            <div className="feature-area style-two animate__animated animate__slideInUp">
                <div className="container-fluid">
                    <div className="row">
                        {FeatureV2Data.map(feature =>
                            <div className="col-lg-3 col-md-6" key={feature.id}>
                                <SingleFeatureV2 feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV2;