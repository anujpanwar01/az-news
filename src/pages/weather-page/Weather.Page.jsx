import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import useCroods from "../../hooks/use-croods";
import { getCurrentWeather } from "../../store/weather/weater.action";
import { BiSearchAlt } from "react-icons/bi";
import FullDayWeather from "../../components/full-day/FullDay";
import {
  CurrentDayWeather,
  Form,
  WeatherPageSection,
} from "./Weather.Page.styles";
const unitConverter = (data, unit) => {
  const dot = unit !== "k" ? "°" : "";
  let temp;
  if (unit === "c") {
    temp = (data - 32) * 0.55;
  }
  if (unit === "f") {
    temp = data;
  }
  if (unit === "k") {
    temp = (data - 32) * 0.55 + 273.15;
  }
  return temp.toFixed(2) + dot + unit.toUpperCase();
};
const WeatherPage = () => {
  const { weather } = useSelector((state) => state);
  const inputRef = useRef();
  const { currentWeather } = weather;
  const dispatch = useDispatch();
  const {
    userCountryCode: { adminName1: cityName, countryCode },
    latitude: lat,
    longitude: lon,
  } = useCroods();
  const [userTypedCity, setUserTypedCity] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredCity = inputRef.current?.value;

    if (!enteredCity) {
      return;
    }
    // capitalize first character
    const capitalizeCityName = enteredCity
      .trim()
      .split(" ")
      .map((letter) => letter[0].toUpperCase().concat(letter.slice(1)))
      .join(" ");
    setUserTypedCity(capitalizeCityName);
  };

  useEffect(() => {
    if (!cityName || !countryCode) return;
    dispatch(getCurrentWeather(userTypedCity, lat, lon));
  }, [dispatch, cityName, countryCode, userTypedCity, lat, lon]);

  return (
    <WeatherPageSection>
      {weather?.isLoading && <Spinner className="weather-spinner" />}
      {!weather?.isLoading && (
        <>
          <CurrentDayWeather
            currentWeather={currentWeather}
            unitConverter={unitConverter}
          >
            <Form
              labelFor="search"
              id="search"
              type="search"
              placeholder="Search by City or Country ..."
              ref={inputRef}
              submitHandler={submitFormHandler}
              className="form"
            >
              <BiSearchAlt />
            </Form>
          </CurrentDayWeather>

          <FullDayWeather
            weather={currentWeather}
            unitConverter={unitConverter}
          />
        </>
      )}
    </WeatherPageSection>
  );
};
export default WeatherPage;
