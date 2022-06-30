import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NewsCard from "../../components/news-card/NewsCard";
import useLazyLoad from "../../hooks/use-lazyLoad";
import { getNews } from "../../store/news/news.action";
let start = false;
const NewsPage = () => {
  const { articles } = useSelector((state) => state.news);
  const [page, setPage] = useState(1);
  const { setElement } = useLazyLoad(setPage);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("init");
    console.log(page);
    if (start) dispatch(getNews());
    start = true;
    // fetch(
    //   "https://newsapi.org/v2/top-headlines?country=in&apiKey=02fa5f3687c94273b7d3c55f302e7a1d"
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // fetch(
    //   "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=02fa5f3687c94273b7d3c55f302e7a1d"
    // )
    //   .then((res) => res.json())
    //   .then((data) => setData(data.articles));
  }, [dispatch, page]);
  console.log(articles);
  return (
    <main>
      news page
      <Link to={"/weather"}>weaher</Link>
      {articles.map((news, i) => (
        <NewsCard key={i} news={news} />
      ))}
      <section ref={setElement}>sdfs</section>
    </main>
  );
};
export default NewsPage;

// const [data, setData] = useState([]);
// const { data: datas, err, getLocation } = useWeather();
// let lat = 0,
//   lon = 0;
// window.navigator.geolocation.getCurrentPosition(function (location) {
//   lat = location.coords.latitude;
//   lon = location.coords.longitude;
// });
// console.log(datas, err);
// useEffect(() => {
//   getLocation(61.524, 105.3188);
// }, [getLocation, lat, lon]);

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host":
//       "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
//     "X-RapidAPI-Key": "d115169de0msh2550577ba0a38fep1a36bdjsne999253a78d2",
//   },
// };

// const tx = () => {
//   fetch(
//     "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk",
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// };
// useEffect(() => {
//   fetch(
//     "https://newsapi.org/v2/top-headlines?country=in&apiKey=02fa5f3687c94273b7d3c55f302e7a1d"
//   )
//     .then((res) => res.json())
//     .then((data) => data);
//   fetch(
//     "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=02fa5f3687c94273b7d3c55f302e7a1d"
//   )
//     .then((res) => res.json())
//     .then((data) => setData(data.articles));
// }, []);

// const list = data.map((ele) => (
//   <li style={{ width: "10rem" }} key={Math.random() * 1923498237904}>
//     <img width={"100%"} src={ele.urlToImage} alt="" />
//     <h2>{ele.title}</h2>
//     <p>{ele.description}</p>
//   </li>
// ));
