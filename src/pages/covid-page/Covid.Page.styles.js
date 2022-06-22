import styled, { css } from "styled-components";
import { flex } from "../../global-styles/resuable.styles";
import SearchForm from "../../components/search-box/SearchForm";

const commonStyle = css`
  ${flex("center", "column")}
  background: #d00000;
  padding: 3rem 1rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 34.375em) {
    padding: 4rem 1rem;
  }
  && {
    color: white;
    font-size: 1.2rem;
  }
  p {
    font-size: 3.2rem;
    margin-top: 1rem;
  }
`;
export const Form = styled(SearchForm)``;
export const NewCases = styled.div`
  ${commonStyle};
`;
export const NewDeath = styled.div`
  ${commonStyle}
  background:#696767;
`;
export const NewRecovered = styled.div`
  ${commonStyle};
  background: #007200;
`;
export const CovidContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  position: relative;
  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr 2fr;
  }
  @media only screen and (max-width: 34.375em) {
    grid-template-columns: 1fr;
  } ;
`;
export const CovidCurrentDate = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background: #d3d3d3;
  padding: 4rem 2rem;

  h3 {
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
