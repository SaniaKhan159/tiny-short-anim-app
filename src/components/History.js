import React from 'react';
import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";

export const History = () => {
    const { keyframes, animationOptions } = fadeInUp;
    const hist_anim = useWebAnimations({
        keyframes,
        animationOptions: {
            ...animationOptions,
            delay: 3000,
            duration: 5000,
        }
    });
  return (
    <div className="row-2 history-banner padd-tb-40" ref={hist_anim.ref}>
     
    </div>
  );
}

export default History;
