import { useCallback, useState } from "react";
import useFetch from "./use-fetch";

const key = process.env.REACT_APP_GEOCODE;
const useWeather = (city) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { response: cityData } = useFetch(city);

  const getWeatherByCoords = useCallback(async (lat, lon) => {
    if (!lat || !lon) {
      setErr("Something went wrong");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7bfc1e9afba40d58a73f87768b8430ae&units=metric`
      );
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setErr(err);
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    err,
    isLoading,
    cityData,

    getWeatherByCoords,
  };
};
export default useWeather;
