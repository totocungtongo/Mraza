import { useEffect, useState } from "react";

const AnimationMasuk = (ref, offset = 30) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer;
    const currentRef = ref.current;

    if (currentRef) {
      const options = {
        root: null,
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }, options);

      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.disconnect();
      }
    };
  }, [ref, offset]);

  return isVisible;
};

export default AnimationMasuk;

// AnimationMasuk
