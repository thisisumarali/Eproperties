import React from 'react';
import sectionShape from '@/public/assets/images/about/section-shape.png'
import Image from 'next/image';
import TestimonialV2Data from '../../../public/assets/jsonData/testimonial/TestimonialV2Data.json'
import SingleTestimonialV2 from './SingleTestimonialV2';

const TestimonialV2 = ({ testimonialClass }) => {
	return (
		<>
			<div className={`testimonial-area style-two animate__animated animate__slideInUp ${testimonialClass ? testimonialClass : ""}`}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="section-title text-center">
								<div className="section-shape">
									<Image src={sectionShape} alt="image" />
								</div>
								<div className="section-sub-title">
									<h4>{TestimonialV2Data.subTitle}</h4>
								</div>
								<div className="section-main-title">
									<h2>{TestimonialV2Data.title1}</h2>
									<h2>{TestimonialV2Data.title2}</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						{TestimonialV2Data.testimonialData.map(testimonial =>
							<div className="col-lg-4 col-md-6" key={testimonial.id}>
								<SingleTestimonialV2 testimonial={testimonial} />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialV2;