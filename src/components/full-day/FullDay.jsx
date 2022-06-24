import {
  FullDayWeatherCast,
  Humidity,
  SunStatus,
  Temprature,
  TodayHoursWeather,
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
import { useState, useEffect } from "react";
import Carousel from "../carousel/Carousel";
import { useSelector } from "react-redux";
import FullDayNav from "../full-day-nav/FullDayNav";

const FullDayWeather = (props) => {
  const [hour, setHour] = useState([]);
  const [active, setAcitve] = useState(0);
  const [navActive, setNavActive] = useState(true);
  const { unit } = useSelector((state) => state.weather);

  useEffect(() => {
    let current;
    if (navActive) {
      current = Array.from(document.querySelectorAll(".hour"));
    } else {
      current = Array.from(document.querySelectorAll(".week"));
    }
    setHour(current);
  }, [navActive]);

  /////////////////////////////////////////////////////////////////////////////
  if (!props.weather?.sunStatus) {
    return;
  }

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
      if (active === 0 || active > hour.length) {
        return (active = 0);
      } else {
        return active - 1;
      }
    });
  const rightCarouselBtn = () =>
    setAcitve((active) => {
      if (active === hour.length || active > hour.length) {
        return (active = hour.length);
      } else {
        return active + 1;
      }
    });

  const dayNavActive = () => setNavActive(true);
  const weekNavActive = () => setNavActive(false);
  return (
    <FullDayWeatherCast>
      <h2>Time Zone -: {props.weather?.timezone}</h2>

      <FullDayNav
        navActive={navActive}
        onTodayActive={dayNavActive}
        onWeekActive={weekNavActive}
      />

      <TodayHoursWeather>
        <button
          className="left-btn"
          onClick={leftCarouselBtn}
          disabled={active === 0}
        >
          <HiOutlineArrowNarrowLeft />
        </button>
        <Carousel
          weather={props.weather}
          active={active}
          navActive={navActive}
          unitConverter={props.unitConverter}
        />

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
            <p>{props.unitConverter(props.weather?.maxTemp, unit)}</p>
          </div>
          <div>
            <span className="low-temp">
              <FaTemperatureLow />
            </span>
            <p>{props.unitConverter(props.weather?.minTemp, unit)}</p>
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
