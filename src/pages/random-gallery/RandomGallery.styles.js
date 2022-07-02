import styled from "styled-components";
import SearchForm from "../../components/search-box/SearchForm";
import { flex } from "../../global-styles/resuable.styles";
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-width: 100%;
  min-height: 100vh;
  grid-gap: 1.5rem;
  padding: 1.5rem;
`;
export const RandomGalleryContainer = styled.section`
  section {
    height: 100vh;
    width: 100%;

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 25em) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled(SearchForm)`
  margin-top: 2rem;
  width: 100%;
  overflow: hidden;
  align-self: center;
  ${flex()}
  align-items:stretch;

  input {
    border-radius: 0.5rem;
    border: none;
    width: 60%;
    padding: 1.4rem 1rem;
    font-size: 1.6rem;

    &::placeholder {
      color: gray;
      letter-spacing: 0.6px;
    }
    @media only screen and (max-width: 25em) {
      width: 65%;
    }
  }
  button {
    padding: 0.8rem 2rem;
    margin-left: 1rem;
    background-color: #2d99c0;
    border: none;
    font-size: 1.4rem;
    text-transform: capitalize;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
  }
`;
