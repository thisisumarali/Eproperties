import Link from 'next/link';
import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li >
            <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
            <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
            <li><Link href="https://linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
        </>
    );
};

export default SocialShare;