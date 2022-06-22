import { setIsLoading, weather } from "./weather.slice";

export const getCurrentWeather = (cityName) => {
  const api_key = process.env.REACT_APP_WEATHER_API;

  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    const userLocationWeather = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`
      );
      const data = await res.json();

      return data;
    };
    try {
      const data = await userLocationWeather();
      const transformedData = [];

      const date = `${new Date().getDate()}/${
        new Date().getUTCMonth() + 1
      }/${new Date().getUTCFullYear()}`;

      transformedData.push({
        name: data.name,
        sunrise: new Date(data?.sys?.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data?.sys?.sunset * 1000).toLocaleTimeString(),
        visibility: `${data?.visibility / 1000} Km`,
        latitude: data?.coord?.lat,
        longitude: data?.coord?.lon,
        temp: data?.main?.temp,
        minTemp: data?.main?.temp_min,
        feelsLike: data?.main?.feels_like,
        pressure: `${(data?.main?.pressure * 0.02953).toFixed(
          2
        )} inch of mercury [0 °C]`,
        message: data?.weather[0]?.main,
        des: data?.weather[0]?.description,
        icon: data?.weather[0]?.icon,
        date,
        day: day[new Date().getDay() - 1],
        clouds: `${data?.clouds?.all}%`,
      });

      dispatch(setIsLoading(false));
      dispatch(weather(transformedData[0]));
    } catch (err) {
      dispatch(setIsLoading(false));
    }
  };
};
