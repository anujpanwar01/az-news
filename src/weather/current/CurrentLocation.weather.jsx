import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import useWeather from "../../hooks/use-weather";
import { countryCode } from "../../store/weather.slice";
import { useDispatch } from "react-redux";
let latitude = 0;
let longitude = 0;

const CurrentLocationWeater = () => {
  const [icon, setIcon] = useState();
  const dispatch = useDispatch();
  window.navigator.geolocation.getCurrentPosition(function (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  });

  const { data, err, getWeatherByCoords: getLocation } = useWeather();

  useEffect(() => {
    getLocation(latitude, longitude);
    dispatch(countryCode(data?.sys?.country));
  }, [getLocation, dispatch]);

  useEffect(() => {
    setIcon(data?.weather?.[0]?.icon);
  }, [data]);
  console.log(data, latitude, longitude);
  return (
    <>
      <h1>{data?.sys?.country}</h1>
      {icon && (
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icons" />
      )}{" "}
    </>
  );
};
export default CurrentLocationWeater;
