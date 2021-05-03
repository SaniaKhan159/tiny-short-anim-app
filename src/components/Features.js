import React from 'react';
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";

export const Features = () => {
    const { keyframes, animationOptions } = fadeInUp;
    const feature_anim = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 2000,
            duration: 4000,
        }
    });
    return(
        <div className="row-2 padd-tb-40" ref={feature_anim.ref}>
            <div className="container">
                <div className="col-md-4">
                    <div className="feature-box">
                        <div className="row-2">
                            <h3>ANI</h3>
                            <h4>Artificial Intelligence</h4>
                            <p>aka</p>
                            <h3>Weak AI</h3>
                            <h5>Narrow Capability</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="feature-box f-bg2">
                        <div className="row-2">
                            <h3>AGI</h3>
                            <h4>Artificial General Intelligence</h4>
                            <p>aka</p>
                            <h3>Strong AI</h3>
                            <h5>General Capability</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="feature-box f-bg3">
                        <div className="row-2">
                            <h3>ASI</h3>
                            <h4>Artificial Super Intelligence</h4>
                            <p>aka</p>
                            <h3>Strong AI</h3>
                            <h5>Transcendent Capability</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;