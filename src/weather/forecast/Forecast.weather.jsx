import useWeather from "../../hooks/use-weather";

const Forecast = () => {
  const { cityData } = useWeather(
    `https://api.openweathermap.org/data/2.5/forecast?q=Uttarakhand&appid=7bfc1e9afba40d58a73f87768b8430ae`
    // `https://api.openweathermap.org/data/2.5/weather?q=Uttarakhand&appid=7bfc1e9afba40d58a73f87768b8430ae`
  );
  console.log(cityData);
  return <div>ForeCase</div>;
};
export default Forecast;
