import {
  CarouselContainer,
  CarouselWrapper,
  CarouselContentWrapper,
  TodayHourWeather,
  CarouselContent,
} from "./Carousel.styles";
import { useSelector } from "react-redux/es/exports";

const dateToLocale = (date) => {
  return new Date(date)
    .toUTCString()
    .split(" ")
    .filter((_, i) => i < 4)
    .join(" ");
};

const Carousel = (props) => {
  const { unit } = useSelector((state) => state.weather);
  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselContentWrapper>
          <CarouselContent>
            {props.navActive && (
              <>
                {props.weather?.todayHours?.hours.map((weather, i) => (
                  <TodayHourWeather
                    key={i}
                    className="hour"
                    style={{ transform: `translateX(-${props.active * 100}%)` }}
                  >
                    <img
                      src={`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/2nd%20Set%20-%20Color/${weather?.icon}.png?raw=true`}
                      alt={weather.conditions}
                    />
                    <p>{weather?.datetime}</p>
                    <div className="min-max-temp">
                      <p>{props.unitConverter(weather.temp, unit)} </p>-
                      <p>{props.unitConverter(weather.feelslike, unit)} °C</p>
                    </div>
                  </TodayHourWeather>
                ))}
              </>
            )}
            {!props.navActive && (
              <>
                {props.weather?.days.map((day, i) => {
                  return (
                    <TodayHourWeather
                      key={i}
                      className="week"
                      style={{
                        transform: `translateX(-${props.active * 100}%)`,
                      }}
                    >
                      <img
                        src={`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/2nd%20Set%20-%20Color/${day?.icon}.png?raw=true`}
                        alt={day.conditions}
                      />

                      <p>{dateToLocale(day?.datetime)}</p>
                      <div className="min-max-temp">
                        <p>{props.unitConverter(day.tempmin, unit)}</p>-
                        <p>{props.unitConverter(day.tempmax, unit)} </p>
                      </div>
                    </TodayHourWeather>
                  );
                })}
              </>
            )}
          </CarouselContent>
        </CarouselContentWrapper>
      </CarouselWrapper>
    </CarouselContainer>
  );
};
export default Carousel;
/*
day: "Friday"
days: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
des: "Cooling down with a chance of rain Friday."

cloudcover: 0
conditions: "Clear"
datetime: "2022-06-24"
datetimeEpoch: 1656009000
description: "Clear conditions throughout the day."
dew: 51.1
feelslike: 91.9
feelslikemax: 101.8
feelslikemin: 82.2
hours: (24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
humidity: 29.8
icon: "clear-day"
moonphase: 0.91
precip: 0
precipcover: 0
precipprob: 0
preciptype: null
pressure: 1001.3
severerisk: 10
snow: 0
snowdepth: 0
solarenergy: 28.5
solarradiation: 330.9
source: "comb"
stations: (2) ['VIDP', 'remote']
sunrise: "05:21:48"
sunriseEpoch: 1656028308
sunset: "19:21:23"
sunsetEpoch: 1656078683
temp: 93.8
tempmax: 107.1
tempmin: 80.5
uvindex: 10
visibility: 9
winddir: 287.4
windgust: 13.2
windspeed: 11.2
*/
