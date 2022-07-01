 weather
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

import { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Error from "../../components/error/Error";
import Galleries from "../../components/gallery/Gallery";
import { LoadingSpinner } from "../../components/spinner/Spinner.styles";

import useLazyLoad from "../../hooks/use-lazyLoad";
import { fetchImgHandler } from "../../store/gallery/gallery.action";
import {
  Form,
  GalleryGrid,
  RandomGalleryContainer,
} from "./RandomGallery.styles";

const API_KEY = process.env.REACT_APP_UNSPLASH_API;
let start = false;

const RandomGallery = (props) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const { setElement: setElementHandler } = useLazyLoad(setPage);
  const [enteredSearch, setEnteredSearch] = useState("home");
  const valueRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!valueRef || valueRef.current.value.length < 3) return;
    setEnteredSearch(valueRef.current.value);
  };

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${enteredSearch}&client_id=${API_KEY}`;

    if (start) {
      dispatch(fetchImgHandler(url));
    }
    return () => (start = true);
  }, [dispatch, page, enteredSearch]);

  if (props.notification?.isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (props.notification?.error && !props.notification?.isLoading) {
    return <Error error={props.notification?.error} />;
  }

  return (
    <RandomGalleryContainer>
      <Form
        placeholder={"Type City or anything full name"}
        ref={valueRef}
        submitHandler={submitHandler}
      >
        search
      </Form>
      <GalleryGrid>
        {props.images.map((img, i) => (
          <Galleries img={img} key={img.id} />
        ))}
      </GalleryGrid>
      <section className="sec" ref={setElementHandler}>
        {/* sd */}

      </section>
    </RandomGalleryContainer>
  );
};
export default RandomGallery;
