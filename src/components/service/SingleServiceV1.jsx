import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServiceV1 = ({ service }) => {
    const { id, thumb, thumbIcon, title, text, btnIcon, btnText, sideTitle } = service

    return (
        <>
            <div className="service-single-box animate__animated animate__slideInUp">
                <div className="service-thumb">
                    <Image src={`/assets/images/resource/${thumb}`} width={340} height={420} alt="image" />
                </div>
                <div className="service-content">
                    <div className="service-icon">
                        <Image src={`/assets/images/resource/${thumbIcon}`} width={50} height={50} alt="image" />
                    </div>
                    <div className="service-text">
                        <h4><Link href={`/service-details/${id}`}>{title}</Link></h4>
                        <p>{text}</p>
                        <Link href={`/service-details/${id}`}>{btnText}<i className={btnIcon}></i></Link>
                    </div>
                </div>
                <div className="service-title">
                    <h4>{sideTitle}</h4>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV1;