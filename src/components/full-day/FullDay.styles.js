import styled, { css } from "styled-components";
import { flex } from "../../global-styles/resuable.styles";

const card = (borderColor) => css`
  width: 35rem;
  min-height: 20rem;
  position: relative;
  padding: 2rem 1.6rem 1.6rem;
  box-shadow: 0rem 0rem 2rem #0000001c;
  border-radius: 1rem;
  border-top: 4px solid ${borderColor};
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    box-shadow: 0 0 2rem #00000078;
  }
  span {
    color: white;
  }
  p {
    font-size: 1.6rem;
  }
  div {
    ${flex("flex-start")}
    &:not(:last-child) {
      margin: 1.8rem 0;
    }
    p {
      margin-left: 1.6rem;
    }
  }
`;
const cardAdditional = css`
  ${flex()}
  color:white;
  font-size: 3.2rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  box-sizing: content-box;
`;
const absolute = css`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;
export const FullDayWeatherCast = styled.div`
  padding: 1rem 2rem 2rem;
  h2 {
    font-size: 2rem;
    color: #6600db;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
  }
  .row-1,
  .row-2 {
    ${flex("space-between")}
  }
  .row-2 {
    margin-top: 2.4rem;
  }
`;

export const SunStatus = styled.div`
  ${card("#ff9d00")}

  .sunrise,
  .sunset {
    ${cardAdditional}
    background: #ffd400;
  }
`;
export const TodayHoursWeather = styled.div`
  vertical-align: middle;
  margin-bottom: 3rem;
  width: 110rem;
  height: 18rem;
  padding: 1rem;

  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  position: relative;
  button {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    padding: 1rem;
    border-radius: 50%;
    ${flex()}
    transform:translate(0,-50%);
    background: black;
    color: white;
    cursor: pointer;
    z-index: 1000;
    &:disabled {
      background: #00000078;
    }
  }
  .right-btn {
    right: 0.5%;
  }
  .left-btn {
    left: 0%;
  }
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  &::before {
    content: "";
    position: absolute;
    width: 1%;

    right: -1%;
    height: 100%;
    ${"" /* box-shadow: 1rem 1rem 4rem #00000069; */}
  }
  &::after {
    content: "";
    position: absolute;
    left: -1%;
    width: 1%;
    height: 100%;
    ${"" /* box-shadow: 0rem 0rem 4rem #00000069; */}
  }
`;
export const TodayHourWeather = styled.div`
  flex: 0 0 auto;
  padding: 1rem 3rem 2rem;
  transition: all 500ms ease;
  cursor: pointer;
  box-shadow: 0 0 1rem #0000004f;
  ${flex("center", "column")}
  img {
    margin-bottom: 1rem;
  }
  &:hover {
    box-shadow: 0 0 2rem #00000078;
  }
  border-radius: 1rem;

  margin-right: 3rem;

  .min-max-temp {
    ${flex("space-around")};
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;
export const Temprature = styled.div`
  ${card("red")};
  .high-temp,
  .low-temp {
    ${cardAdditional};
    background: #cfcfcf54;
  }
  .high-temp {
    color: red;
  }
  .low-temp {
    color: green;
    transform: rotate(180deg);
  }
  p {
    margin-bottom: 0;
  }
`;

export const Humidity = styled.div`
  ${card("#01c401")};
  .humidity {
    ${cardAdditional}
    background: #01c401;
  }
  div {
    ${absolute}
  }
`;
//////////////////////////////////////////////////////////////////////////////
//row-2
export const Visibility = styled.div`
  ${card("#6b20e6")};
  span {
    ${cardAdditional}
    background: #6b20e6;
  }
  div {
    ${absolute}
  }
`;
export const Pressure = styled.div`
  ${card("#ae0000")}
  span {
    ${cardAdditional}
    background: #ae0000;
  }
  div {
    ${absolute}
  }
`;
export const LatLon = styled.div`
  ${card("#138e8e")};
  span {
    ${cardAdditional}
    background: #138e8e;
  }
  div {
    ${absolute}
  }
`;
