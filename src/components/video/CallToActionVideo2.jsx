"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const CallToActionVideo2 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="text-center">
                <div className="video-icon style-three">
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="BS4TUd7FJSg" onClose={() => setOpen(false)} />
                    <Link href={{ javascript: void (0) }} scroll={false} className="video-vemo-icon venobox vbox-item" onClick={() => setOpen(true)}>
                        <i className="bi bi-play"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CallToActionVideo2;