import React from 'react';
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";

export const Footer = () => {
    const { keyframes, animationOptions } = fadeInUp;
    const footer_anim = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 5000,
            duration: 7000,
        }
    });
  return (
    <div className="row-2 footer padd-tb-40" ref={footer_anim.ref}>
        <div className="container">
            <p>© All Right Reserved Mixed Reality 2021</p>
        </div>
    </div>
  );
}

export default Footer;
