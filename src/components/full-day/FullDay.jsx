import {
  FullDayWeatherCast,
  Humidity,
  SunStatus,
  Temprature,
  TodayHoursWeather,
  TodayHourWeather,
  Visibility,
  Pressure,
  LatLon,
} from "./FullDay.styles";
import { GiSunset, GiSunrise } from "react-icons/gi";
import { WiHumidity, WiTsunami } from "react-icons/wi";
import { HiArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineVisibility } from "react-icons/md";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { TiGlobe } from "react-icons/ti";
import { useState } from "react";
const FullDayWeather = (props) => {
  const hour = Array.from(document.querySelectorAll(".hour"));

  const [active, setAcitve] = useState(0);
  if (!props.weather?.sunStatus) {
    return;
  }
  console.log(active);

  const [sunrise, sunset] = props.weather?.sunStatus.map((ele) => {
    let val;
    for (const key in ele) {
      val = ele[key].split(",")[1];
    }
    return val;
  });

  const lat = (props.weather?.latitude).toFixed(2);
  const lon = (props.weather?.longitude).toFixed(2);

  const leftCarouselBtn = () =>
    setAcitve((active) => {
      if (active === 0) {
        return (active = 0);
      } else {
        return active - 1;
      }
    });
  const rightCarouselBtn = () =>
    setAcitve((active) => {
      if (active === hour.length) {
        return (active = hour.length);
      } else {
        return active + 1;
      }
    });
  return (
    <FullDayWeatherCast>
      <h2>Time Zone -: {props.weather?.timezone}</h2>
      <TodayHoursWeather>
        <button
          className="left-btn"
          onClick={leftCarouselBtn}
          disabled={active === 0}
        >
          <HiOutlineArrowNarrowLeft />
        </button>
        {props.weather?.todayHours?.hours.map((weather, i) => (
          <TodayHourWeather
            key={i}
            className="hour"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            <img
              src={`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/2nd%20Set%20-%20Color/${weather?.icon}.png?raw=true`}
              alt={weather.conditions}
            />
            <p>{weather.datetime.toLocaleString()}</p>
            <div className="min-max-temp">
              <p>{((weather.temp - 32) * 0.55).toFixed(2)} </p>-
              <p>{((weather.feelslike - 32) * 0.55).toFixed(2)} C</p>
            </div>
          </TodayHourWeather>
        ))}
        <button
          className="right-btn"
          onClick={rightCarouselBtn}
          disabled={active === hour.length}
        >
          <HiArrowNarrowRight />
        </button>
      </TodayHoursWeather>
      <div className="row-1">
        <SunStatus>
          <p>Sunrise and Sunset</p>
          <div>
            <span className="sunrise">
              <GiSunrise />
            </span>
            <p>{sunrise}</p>
          </div>
          <div>
            <span className="sunset">
              <GiSunset />
            </span>
            <p>{sunset}</p>
          </div>
        </SunStatus>
        <Temprature>
          <p>Low & High Temprature</p>
          <div>
            <span className="high-temp">
              <FaTemperatureHigh />
            </span>
            <p>{((props.weather?.maxTemp - 32) * 0.55).toFixed(2)} C</p>
          </div>
          <div>
            <span className="low-temp">
              <FaTemperatureLow />
            </span>
            <p>{((props.weather?.minTemp - 32) * 0.55).toFixed(2)} C</p>
          </div>
        </Temprature>
        <Humidity>
          <p>Atmospheric Moisture(Humidity)</p>
          <div>
            <span className="humidity">
              <WiHumidity />
            </span>
            <p>{props.weather?.humidity}%</p>
          </div>
        </Humidity>
      </div>
      <div className="row-2">
        <Visibility>
          <p>Visibility</p>
          <div>
            <span>
              <MdOutlineVisibility />
            </span>
            <p>{props.weather?.visibility} Km</p>
          </div>
        </Visibility>
        <Pressure>
          <p>Pressure</p>
          <div>
            <span>
              <WiTsunami />
            </span>
            <p>{props.weather?.pressure}</p>
          </div>
        </Pressure>
        <LatLon>
          <p>Latitude & Longitude</p>
          <div>
            <span>
              <TiGlobe />
            </span>
            <aside>
              <p>latitude -: {lat}</p>
              <p>longitude -: {lon}</p>
            </aside>
          </div>
        </LatLon>
      </div>
    </FullDayWeatherCast>
  );
};
export default FullDayWeather;
/*
clouds: "undefined%"
date: "2022-6-23"
day: "Thrusday"
days: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
des: "Cooling down with a chance of rain Thursday."
feelsLike: "40.92"
humidity: 16.99
icon: "clear-day"
latitude: 27.1766701
longitude: 78.0080745
maxTemp: 107
message: "Clear"
minTemp: 89.7
name: undefined
pressure: "29.50 inch of mercury [0 °C]"
sunrise: "05:24:35"
sunset: "6/23/2022, 6:45:47 PM"
temp: "41.25"
timezone: "Asia/Kolkata"
todayHours: {datetime: '2022-06-23', datetimeEpoch: 1655922600, tempmax: 107, tempmin: 89.7, temp: 98.6, …}
visibility: 15
*/
