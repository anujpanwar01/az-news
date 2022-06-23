import { setIsLoading, weather } from "./weather.slice";

export const getCurrentWeather = (cityName, lat, lon) => {
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
      let data;
      if (cityName) {
        const res = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=${api_key}&contentType=json`
        );

        data = await res.json();
      } else {
        const res = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${api_key}`
        );

        data = await res.json();
      }

      return data;
    };

    try {
      const data = await userLocationWeather();
      const transformedData = [];

      const date = `${new Date().getUTCFullYear()}-${
        new Date().getUTCMonth() + 1
      }-${new Date().getDate()}`;

      transformedData.push({
        name: data.name,
        sunStatus: [
          {
            sunrise: new Date(
              `${date} ${data?.currentConditions?.sunrise}`
            ).toLocaleString(),
          },
          {
            sunset: new Date(
              `${date} ${data?.currentConditions?.sunset}`
            ).toLocaleString(),
          },
        ],
        visibility: data?.currentConditions.visibility,
        latitude: data?.latitude,
        longitude: data?.longitude,
        temp: ((data?.currentConditions?.temp - 32) * 0.55).toFixed(2),
        minTemp: data?.days[0]?.tempmin,
        maxTemp: data?.days[0]?.tempmax,
        feelsLike: ((data?.days[0]?.feelslikemax - 32) * 0.55).toFixed(2),
        pressure: `${(data?.currentConditions?.pressure * 0.02953).toFixed(
          2
        )} inch of mercury [0 °C]`,
        message: data?.currentConditions?.conditions,
        des: data?.description,
        icon: data?.currentConditions?.icon,
        date,
        day: day[new Date().getDay() - 1],
        clouds: `${data?.clouds?.all}%`,
        humidity: data?.currentConditions?.humidity,
        timezone: data?.timezone,
        todayHours: data?.days[0],
        days: data?.days,
      });

      dispatch(setIsLoading(false));
      dispatch(weather(transformedData[0]));
    } catch (err) {
      dispatch(setIsLoading(false));
    }
  };
};
