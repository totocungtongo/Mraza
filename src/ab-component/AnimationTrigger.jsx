import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer;
    const currentRef = ref.current;

    if (currentRef) {
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
  }, [ref, options]);

  return isVisible;
};

export default useIntersectionObserver;
