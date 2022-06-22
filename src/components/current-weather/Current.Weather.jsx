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
            <img
              src={`http://openweathermap.org/img/w/${currentWeather?.icon}.png`}
              alt={currentWeather?.name}
            />
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
          <h2>{currentWeather?.name}</h2>
        </div>
      )}
    </>
  );
};
export default CurrentWeather;
