import Image from 'next/image';
import React from 'react';
import PriceV1Data from '../../../public/assets/jsonData/price/PriceV1Data.json'
import SinglePriceV1 from './SinglePriceV1';
import sectionShape from '@/public/assets/images/about/section-shape.png'

const PriceV1 = () => {
	return (
		<>
			<div className="pricing-area animate__animated animate__slideInUp">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center">
								<div className="section-shape">
									<Image src={sectionShape} alt="image" />
								</div>
								<div className="section-sub-title">
									<h4>{PriceV1Data.subTitle}</h4>
								</div>
								<div className="section-main-title pricing">
									<h2>{PriceV1Data.title}</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						{PriceV1Data.priceData.map(plan =>
							<div className="col-lg-4 col-md-6" key={plan.id}>
								<SinglePriceV1 plan={plan} />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default PriceV1;