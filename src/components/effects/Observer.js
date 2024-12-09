import { useEffect, useRef, useState } from 'react';

const Observer = (thresholdTrig = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          //console.log(entry.isIntersecting);
          //setIsVisible(entry.isIntersecting);     // issue lagging on mobile devices
          //observer.disconnect(); // Stop observing all elements

          if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting); // set true if already intersected on elements
          } else {
            //add set to false if you want dynamic animations (not recommended for mobile devices);
          }

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
