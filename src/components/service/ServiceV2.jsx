import React from 'react';
import ServiceV1Data from '../../../public/assets/jsonData/service/ServiceV1Data.json'
import sectionShape from '@/public/assets/images/about/section-shape.png'
import Image from 'next/image';
import SingleServiceV2 from './SingleServiceV2';

const ServiceV2 = () => {
	return (
		<>
			<div className="service-area animate__slideInUp">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center">
								<div className="section-shape">
									<Image src={sectionShape} alt="image" />
								</div>
								<div className="section-sub-title">
									<h4>{ServiceV1Data.subTitle}</h4>
								</div>
								<div className="section-main-title">
									<h2>{ServiceV1Data.title1}</h2>
									<h2>{ServiceV1Data.title2}</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						{ServiceV1Data.serviceData.map(service =>
							<div className="col-lg-4 col-md-6" key={service.id}>
								<SingleServiceV2 service={service} />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceV2;