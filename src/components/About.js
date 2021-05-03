import React from 'react';
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";

export const About = () => {
    const { keyframes, animationOptions } = fadeInUp;
    const about_anim = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 1000,
            duration: 3000,
        }
    });
    return(
        <div className="row-2 padd-tb-40" ref={about_anim.ref}>
            <div className="container">
                <div className="about text-center">
                    <h2>What is AI?</h2>
                    <p>Artificial intelligence (AI) is wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. ... It is the endeavor to replicate or simulate human intelligence in machines.</p>
                </div>
            </div>
        </div>
    )
}

export default About;