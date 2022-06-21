import { Link } from "react-router-dom";
import CurrentLocationWeater from "../../weather/current/CurrentLocation.weather";
import { WeatherPageSection } from "./Weather.Page.styles";
const WeatherPage = () => {
  return (
    <WeatherPageSection>
      <CurrentLocationWeater />
      <Link to={"/covid"}>covid</Link>
    </WeatherPageSection>
  );
};
export default WeatherPage;
