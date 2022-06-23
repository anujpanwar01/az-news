import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FaTemperatureHigh } from "react-icons/fa";

const CurrentWeather = (props) => {
  const { currentWeather, className } = props;
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
            <h1>{currentWeather?.temp}</h1>
            <p>°C</p>
          </div>
          <div className="time">
            <p>{currentWeather?.day}</p>

            <p ref={timeRef}></p>
          </div>
          <div className="feel-like">
            <FaTemperatureHigh size={20} />
            <p>{currentWeather?.feelsLike} °C</p>
          </div>
          <h2>{currentWeather?.des}</h2>
        </div>
      )}
    </>
  );
};
export default CurrentWeather;
