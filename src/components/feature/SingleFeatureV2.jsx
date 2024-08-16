import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SingleFeatureV2 = ({ feature }) => {
    const { id, activeClass, icon, number, title, btnText, btnIcon } = feature

    return (
        <>
            <div className={`feature-items-box ${activeClass}`}>
                <div className={`feature-icon-box`}>
                    <div className={`feature-icon-thumb`}>
                        <Image src={`/assets/images/resource/${icon}`} alt="image" width={70} height={70} />
                    </div>
                    <div className="feature-numbar">
                        <h5>{number}</h5>
                    </div>
                </div>
                <div className="feature-text">
                    <h4><Link href={`/project-details/${id}`}>{title}</Link></h4>
                    <Link href={`/project-details/${id}`}>{btnText}<i className={btnIcon}></i></Link>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV2;