import { useRef, useEffect, useState } from "react";
const useLazyLoad = (pageHandler) => {
  const [element, setElement] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          if (pageHandler) pageHandler((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.3, rootMargin: "-50px" }
    )
  );

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return { element, setElement };
};
export default useLazyLoad;
