import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import useCroods from "../../hooks/use-croods";
import { getCurrentWeather } from "../../store/weather/weater.action";
import { BiSearchAlt } from "react-icons/bi";
import {
  CurrentDayWeather,
  Form,
  FullWeatherCast,
  WeatherPageSection,
} from "./Weather.Page.styles";

const WeatherPage = () => {
  const { weather } = useSelector((state) => state);
  const inputRef = useRef();
  const { currentWeather } = weather;
  const dispatch = useDispatch();
  const {
    userCountryCode: { adminName1: cityName, countryCode },
  } = useCroods();
  const [userTypedCity, setUserTypedCity] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredCountry = inputRef.current.value;
    if (!enteredCountry) {
      return;
    }
    // capitalize first character
    const capitalizeCountryName = enteredCountry
      .trim()
      .split(" ")
      .map((letter) => letter[0].toUpperCase().concat(letter.slice(1)))
      .join(" ");

    setUserTypedCity(capitalizeCountryName);
  };

  useEffect(() => {
    if (!cityName || !countryCode) return;
    dispatch(
      getCurrentWeather(
        (!!userTypedCity && userTypedCity) || cityName,
        countryCode
      )
    );
  }, [dispatch, cityName, countryCode, userTypedCity]);

  return (
    <WeatherPageSection>
      {weather?.isLoading && <Spinner className="weather-spinner" />}
      {!weather?.isLoading && (
        <>
          <CurrentDayWeather currentWeather={currentWeather}>
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

          <FullWeatherCast></FullWeatherCast>
        </>
      )}
    </WeatherPageSection>
  );
};
export default WeatherPage;
