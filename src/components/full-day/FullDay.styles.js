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
  @media only screen and (max-width: 1460px) {
    width: 32rem;
  }
  @media only screen and (max-width: 1300px) {
    width: 28rem;
  }
  @media only screen and (max-width: 1200px) {
    width: 26rem;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
  @media only screen and (max-width: 1100px) {
    width: 23rem;
  }
  @media only screen and (max-width: 1000px) {
    width: 21rem;
  }
  @media only screen and (max-width: 950px) {
    width: 50%;
    &:not(:last-child) {
      margin: 0 0 2rem 0;
    }
  }
  @media only screen and (max-width: 800px) {
    width: 60%;
  }
  @media only screen and (max-width: 550px) {
    width: 90%;
  }
  ${
    "" /* @media only screen and (max-width: 1200px) {
    width: 80rem;
  } */
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
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    background-image: linear-gradient(
      to right,
      hsl(258deg 100% 50%),
      hsl(287deg 100% 50%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    align-self: center;
    width: 30%;
    @media only screen and (max-width: 900px) {
      margin-top: 2rem;
      width: 60%;
    }
  }
  .row-1,
  .row-2 {
    ${flex("space-between")}
    @media only screen and (max-width: 1200px) {
      justify-content: flex-start;
    }
    @media only screen and (max-width: 950px) {
      justify-content: space-around;
    }
    @media only screen and (max-width: 950px) {
      flex-direction: column;
    }
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
      background: #0000002e;
      border: 1px solid #0000002e;
    }
  }
  @media only screen and (max-width: 1460px) {
    width: 100rem;
  }
  @media only screen and (max-width: 1300px) {
    width: 90rem;
  }
  @media only screen and (max-width: 1200px) {
    width: 85rem;
  }
  @media only screen and (max-width: 1200px) {
    width: 80rem;
  }
  @media only screen and (max-width: 1100px) {
    width: 70rem;
  }
  @media only screen and (max-width: 1000px) {
    width: 65rem;
  }
  @media only screen and (max-width: 950px) {
    width: 80rem;
  }
  @media only screen and (max-width: 750px) {
    width: 55rem;
  }
  @media only screen and (max-width: 550px) {
    width: 50rem;
    height: 20rem;
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
