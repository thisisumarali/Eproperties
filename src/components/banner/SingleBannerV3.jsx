import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const SingleBannerV3 = ({ banner, sliderNumber }) => {
    const { sliderClass, thumb, animation, subTitle, title1, title2, text, btnText, btnIcon } = banner

    return (
        <>
            <div className={`slide-item ${sliderClass}`}>
                <div className="image-layer">
                    <Image src={`/assets/images/slider/${thumb}`} alt="image" quality={100} sizes="100vw" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="container">
                    <div className={`slider-content style-two ${sliderNumber} ${animation}`}>
                        <div className="slider-sub-title">
                            <h4>{subTitle}</h4>
                        </div>
                        <div className="slider-main-title">
                            <h1>{title1}</h1>
                            <h1>{title2}</h1>
                        </div>
                        <div className="slider-discripton">
                            <p>{text}</p>
                        </div>
                        <div className="eulding-btn">
                            <Link href="#" onClick={handleSmoothScroll}>{btnText} <i className={btnIcon}></i></Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SingleBannerV3;