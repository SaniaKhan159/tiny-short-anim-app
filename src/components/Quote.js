import React from 'react';
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";

export const Quote = () => {
    const { keyframes, animationOptions } = fadeInUp;
    const quote_anim = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 4000,
            duration: 6000,
        }
    });
  return (
    <div className="row-2 quote-main padd-tb-40" ref={quote_anim.ref}>
        <div className="container">
            <q>Artificial intelligence is growing up fast, as are robots whose facial expressions can elicit empathy and make your mirror neurons quiver.</q>
            <p>—Diane Ackerman</p>
        </div>
    </div>
  );
}

export default Quote;
