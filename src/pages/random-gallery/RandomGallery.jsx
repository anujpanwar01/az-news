import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImgHandler } from "../../store/gallery/gallery.action";
import { RandomGalleryContainer } from "./RandomGallery.styles";

const API_KEY = process.env.REACT_APP_UNSPLASH_API;

const RandomGallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery);
  const [page, setPage] = useState(1);
  const [element, setElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.3, rootMargin: "50px" }
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

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=office&client_id=${API_KEY}`;
    dispatch(fetchImgHandler(url));
  }, [dispatch, page]);
  return (
    <RandomGalleryContainer>
      <section>jlsdf</section>
      <section className="sec" ref={setElement}>
        sd
      </section>
    </RandomGalleryContainer>
  );
};
export default RandomGallery;
