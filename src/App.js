import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./global-styles/global.styles";
import NewsPage from "./pages/news-page/News.Page";
import WeatherPage from "./pages/weather-page/Weather.Page";
import CovidPage from "./pages/covid-page/Covid.Page";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import { useSelector } from "react-redux/es/exports";
console.log(process.env.REACT_APP_YOURVARIABLE);

function App() {
  const code = useSelector((state) => state.weather);
  console.log(code);
  return (
    <React.Fragment>
      <GlobalStyle theme={"white"} />
      <Routes>
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/covid" element={<CovidPage />} />
        <Route path={"/"} element={<NewsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
