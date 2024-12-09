import { useEffect, useRef, useState } from 'react';

const Observer = (thresholdTrig = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          //console.log(entry.isIntersecting);
          setIsVisible(entry.isIntersecting);
          observer.disconnect(); // Stop observing once the element is visible
      },
      { threshold: thresholdTrig } // Trigger when 10% of the element is visible
    );

    const currentCardRef = ref.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [thresholdTrig]);

  return ([ref, isVisible]);
};

export default Observer;
