import React from 'react';
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";

export const Banner = () => {
    const banner_Img = useWebAnimations({...zoomIn})
    return (
        <div className="row-2 banner padd-tb-40">
            <div className="container">
                <div className="col-md-12 banner-content">
                    <h2>Artificial Intelligence</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href="/#">Get Started</a>
                </div>

                <div className="col-md-6 banner-img" ref={banner_Img.ref}>
                    
                </div>
            </div>
        </div>
    )
}

export default Banner;