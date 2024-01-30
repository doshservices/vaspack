import React, { useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ start, end, duration }) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Set the in-view state when the component comes into view
  if (inView && !isInView) {
    setIsInView(true);
  }

  return (
    <div ref={ref}>
      {isInView && (
        <CountUp start={start} end={end} duration={duration} useEasing={true} />
      )}
    </div>
  );
};

export default AnimatedCounter;