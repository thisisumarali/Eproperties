"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const CallToActionVideo = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="single-video text-center">
                <div className="video-icon">
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="BS4TUd7FJSg" onClose={() => setOpen(false)} />
                    <Link href={{ javascript: void (0) }} scroll={false} className="video-vemo-icon venobox vbox-item position-relative" onClick={() => setOpen(true)}>
                        <i className="bi bi-play"></i>
                    </Link>
                </div>
                <div className="call-do-title">
                    <h2>Offers Excellentcom Bination</h2>
                    <h2>of Location & Quality</h2>
                </div>
            </div>
        </>
    );
};

export default CallToActionVideo;