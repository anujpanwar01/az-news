import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./global-styles/global.styles";

import Spinner from "./components/spinner/Spinner";
import { createPortal } from "react-dom";
import ImgDetail from "./components/imgDetail/ImgDetail";
import { useSelector } from "react-redux";

const NewsPage = React.lazy(() => import("./pages/news-page/News.Page"));
const WeatherPage = React.lazy(() =>
  import("./pages/weather-page/Weather.Page")
);
const CovidPage = React.lazy(() => import("./pages/covid-page/Covid.Page"));
const RandomGallery = React.lazy(() =>
  import("./pages/random-gallery/RandomGallery")
);
const PageNotFound = React.lazy(() =>
  import("./pages/page-not-found/PageNotFound")
);

function App() {
  const gallery = useSelector((state) => state.gallery);
  const [images, setImages] = useState([]);

  const filterImg = gallery.filterImg;
  useEffect(() => {
    if (images.length === 0) {
      setImages(filterImg);
      console.log("no-rerender");
    } else {
      console.log("rerender");
      const newVal = filterImg.slice(images.length);
      setImages((prvImg) => [...prvImg, ...newVal]);
    }
  }, [filterImg]);

  const loadingSpinner = createPortal(
    <div
      className="spinner"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Spinner />
    </div>,
    document.getElementById("spinner")
  );

  return (
    <React.Suspense fallback={loadingSpinner}>
      <GlobalStyle theme={"white"} />
      <Routes>
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/covid" element={<CovidPage />} />
        <Route path={"/"} element={<NewsPage />} />
        <Route
          path="/gallery"
          element={
            <RandomGallery
              images={images}
              notification={gallery.notification}
            />
          }
        />
        <Route path="gallery/:imgId" element={<ImgDetail img={images} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
// function ImgDetail() {
//   const { imgId } = useParams();
//   return <p>{imgId}</p>;
// }
