// components/AnimateOnScroll.js
"use client"; // This must be the very first line

import { useInView } from "react-intersection-observer";

const AnimateOnScroll = ({ children, animationClass, visibleClass, duration = 'duration-1000', className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // <--- CHANGE THIS LINE FROM 'true' TO 'false'
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      // Pass the className prop directly to the wrapper div
      className={`${className} transition-all ${duration} ease-out ${inView ? visibleClass : animationClass}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;