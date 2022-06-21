import styled from "styled-components";
import { flex } from "../../global-styles/resuable.styles";
export const CountryName = styled.div`
  ${flex()}
  height: 6rem;
  width: 6rem;
  h1 {
    color: green;
    font-size: 3.2rem;
    font-weight: 600;
    margin-left: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const CovidAllCases = styled.div`
  margin-top: 3rem;
  ${flex()}
  @media only screen and (max-width: 56.25em) {
    margin-top: 2rem;
    flex-direction: column;
    width: 100%;
  }
  div {
    width: 30rem;
    padding: 3rem 1rem;
    background: #d00000;
    font-size: 1.4rem;
    border-radius: 1rem;
    color: white;
    ${flex("center", "column")}
    @media only screen and (max-width: 56.25em) {
      width: 80%;
      padding: 4rem 1rem;
    }
    @media only screen and (max-width: 34.375em) {
      width: 90%;
    }
    p {
      font-size: 2.4rem;
      margin-top: 1rem;
    }
  }
  .total-death {
    margin-left: 2rem;
    background: #696767;
    @media only screen and (max-width: 56.25em) {
      margin-left: 0;
      margin-top: 2rem;
    }
  }
`;
export const CountryPopulation = styled.div`
  margin-top: 2rem;
  ${flex("center", "column")}
  padding: 4rem 1rem;
  background: green;
  width: 40rem;
  border-radius: 1rem;
  @media only screen and (max-width: 56.25em) {
    width: 80%;
  }
  @media only screen and (max-width: 34.375em) {
    width: 90%;
  }
  && {
    color: white;
    font-size: 1.6rem;
  }
  p {
    font-size: 2.4rem;
    margin-top: 1rem;
  }
`;
export const CovidHistoryData = styled.div`
  min-height: 100vh;
  min-width: 100%;
  ${flex("center", "column")}
`;
