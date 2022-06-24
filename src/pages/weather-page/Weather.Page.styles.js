import styled from "styled-components";
import CurrentWeather from "../../components/current-weather/Current.Weather";
import { flex } from "../../global-styles/resuable.styles";
import SearchForm from "../../components/search-box/SearchForm";
export const WeatherPageSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 100vh;
  min-weight: 100%;
  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
  .weather-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .error-text {
    color: #f00000;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Form = styled(SearchForm)`
  margin-bottom: 3rem;
  width: 100%;
  height: 5rem;
  box-shadow: 0 0 2rem #0000003b;
  border-radius: 1rem;
  justify-content: space-around;
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  button {
    ${flex()}
    transform: rotate(90deg);
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
  padding: 1rem 1rem 2rem;
  box-shadow: 0.4rem 0 1.6rem #00000021;
  h3 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  .icon-container {
    ${flex("center", "column")}
    height: 15rem;
    width: 15rem;
    margin-bottom: 3rem;
    img {
      height: 80%;
      width: 80%;
    }
    p {
      font-size: 1.6rem;
      margin-top: 1rem;
    }
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
      @media only screen and (max-width: 1100px) {
        font-size: 5.4rem;
      }
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
    font-size: 2.4rem;
    font-weight: 200;
    text-align: center;
    hypens: auto;
  }
`;
export const FullWeatherCast = styled.div``;
