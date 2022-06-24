import React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FaTemperatureHigh } from "react-icons/fa";

const CurrentWeather = (props) => {
  const { currentWeather, className, unitConverter } = props;

  const { unit } = useSelector((state) => state.weather);
  const timeRef = useRef();

  useEffect(() => {
    const interVal = () => {
      const newTime = new Date().toLocaleTimeString();
      if (timeRef?.current) {
        timeRef.current.innerText = newTime;
      }
    };
    const timer = setInterval(interVal, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {currentWeather?.icon && (
        <div className={className}>
          {props.children}
          <h3>{currentWeather?.date}</h3>
          {props?.currentWeather?.icon && (
            <div className="icon-container">
              <img
                src={`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/2nd%20Set%20-%20Color/${currentWeather?.icon}.png?raw=true`}
                alt={currentWeather?.name}
              />
              <p>{currentWeather?.message}</p>
            </div>
          )}
          <div className="temp">
            <h1>{unitConverter(currentWeather?.temp, unit)}</h1>
          </div>
          <div className="time">
            <p>{currentWeather?.day}</p>
            <p ref={timeRef}></p>
          </div>
          <div className="feel-like">
            <FaTemperatureHigh size={20} />
            <p>{unitConverter(currentWeather?.feelsLike, unit)} </p>
          </div>
          <h2>{currentWeather?.des}</h2>
        </div>
      )}
    </>
  );
};
export default CurrentWeather;
