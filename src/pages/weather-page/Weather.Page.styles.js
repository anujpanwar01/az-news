import styled from "styled-components";
import CurrentWeather from "../../components/current-weather/Current.Weather";
import { flex } from "../../global-styles/resuable.styles";
import SearchForm from "../../components/search-box/SearchForm";
export const WeatherPageSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 100vh;
  min-weight: 100%;
  .weather-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Form = styled(SearchForm)`
  margin-bottom: 3rem;
  width: 100%;
  button {
    ${flex()}
    svg {
      height: 2.4rem;
      width: 2.4rem;
    }
  }
`;
export const CurrentDayWeather = styled(CurrentWeather)`
  min-width: 100%;
  min-height: 100vh;
  ${flex("", "column")}
  background:#dedede;
  padding: 2rem 1rem 3rem;

  h3 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  img {
    height: 15rem;
    width: 15rem;
    margin-bottom: 3rem;
  }
  div {
    ${flex()}
  }
  .temp {
    position: relative;
    margin-bottom: 5rem;
    h1 {
      font-size: 7.2rem;
      font-weight: 300;
    }
    p {
      position: absolute;
      right: -15%;
      font-size: 2rem;
      top: 0;
    }
  }
  .time {
    font-size: 2rem;
    margin-bottom: 5rem;
    p {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  .feel-like {
    font-size: 2rem;
    margin-bottom: 5rem;
    p {
      margin-left: 1rem;
    }
  }
  h2 {
    font-size: 4.8rem;
    font-weight: 200;
  }
`;
export const FullWeatherCast = styled.div``;
