import styled from "styled-components";
import { flex } from "../../global-styles/resuable.styles";
export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;

  display: flex;
`;
export const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none;
  padding: 1rem;
  &::-webkit-scrollbar,
  &::-moz-scrollbar {
    display: none;
  }

  & > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;
export const TodayHourWeather = styled.div`
  flex: 0 0 auto;
  padding: 1rem 3rem 2rem;
  transition: all 500ms ease;
  cursor: pointer;
  width: 20rem;
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
export const WeekWeather = styled.div``;
