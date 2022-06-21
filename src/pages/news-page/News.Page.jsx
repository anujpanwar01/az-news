import { Link } from "react-router-dom";
const NewsPage = () => {
  return (
    <main>
      news page
      <Link to={"/weather"}>weaher</Link>
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
