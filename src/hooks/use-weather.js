import { useCallback, useState } from "react";
import useFetch from "./use-fetch";

const useWeather = (city) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { response: cityData } = useFetch(city);

  // const getWeatherByCity = useCallback(async (city) => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bfc1e9afba40d58a73f87768b8430ae`
  //   );
  // },[]);

  const getWeatherByCoords = useCallback(async (lat, lon) => {
    if (!lat || !lon) {
      setErr("Something went wrong");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7bfc1e9afba40d58a73f87768b8430ae&units=metric`
        // `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7bfc1e9afba40d58a73f87768b8430ae&units=metric`
        // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7bfc1e9afba40d58a73f87768b8430ae`
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
