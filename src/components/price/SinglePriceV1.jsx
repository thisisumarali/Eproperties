import Link from 'next/link';
import React from 'react';

const SinglePriceV1 = ({ plan }) => {
    const { animation, title, priceCurrency, price, listIcon, activeClass, list1, list2, list3, list4, list5, btnText, listIcon2, priceType } = plan

    return (
        <>
            <div className={`pricing-single-box ${animation}`}>
                <div className="pricing-content">
                    <div className="pricing-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="pricing-rate">
                        <h3>{priceCurrency}{price}<span>/{priceType}</span></h3>
                    </div>
                    <div className="pricing-list">
                        <span className={activeClass}><i className={listIcon}></i> {list1}</span>
                        <span className={activeClass}><i className={listIcon}></i> {list2}</span>
                        <span><i className={listIcon2}></i> {list3}</span>
                        <span><i className={listIcon2}></i> {list4}</span>
                        <span><i className={listIcon2}></i> {list5}</span>
                    </div>
                </div>
                <div className="pircing-btn">
                    <Link href="/contact">{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV1;