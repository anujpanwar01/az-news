import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./global-styles/global.styles";

import Spinner from "./components/spinner/Spinner";
import { createPortal } from "react-dom";

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
        <Route path="/gallery" element={<RandomGallery />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
