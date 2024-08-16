"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import faqIcon from '@/public/assets/images/resource/faq-icon.png'
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

const FaqVideo = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="text-center">
                <div className="video-icon style-two d-none d-lg-block">
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="BS4TUd7FJSg" onClose={() => setOpen(false)} />
                    <Link href={{ javascript: void (0) }} scroll={false} className="video-vemo-icon venobox vbox-item" onClick={() => setOpen(true)}>
                        <i className="bi bi-play"></i>
                    </Link>
                </div>
                <div className="faq-single-box animate__animated animate__slideInUp">
                    <div className="faq-item-content">
                        <div className="faq-icon-thumb">
                            <Image src={faqIcon} alt="image" />
                        </div>
                        <div className="faq-title">
                            <h4>We Have Many Happy Clients Allover World Wide</h4>
                            <span><i className="bi bi-chevron-double-right"></i> Award Wining Agency</span>
                            <span><i className="bi bi-chevron-double-right"></i> Highest Success Rates</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqVideo;