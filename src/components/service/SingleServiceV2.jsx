import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServiceV2 = ({ service }) => {
    const { id, title, text2, thumb2, thumbIcon2 } = service

    return (
        <>
            <div className="service-items-box">
                <div className="service-items-content">
                    <h4><Link href={`/service-details/${id}`}>{title}</Link></h4>
                    <p>{text2}</p>
                </div>
                <div className="service-items-thumb">
                    <Image src={`/assets/images/service/${thumb2}`} alt="image" width={350} height={220} />
                    <div className="service-items-icon">
                        <Image src={`/assets/images/service/${thumbIcon2}`} alt="image" width={35} height={35} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV2;