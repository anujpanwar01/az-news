import styled from "styled-components";
import { flex } from "../../global-styles/resuable.styles";

export const ErrorContainer = styled.section`
  ${flex("center", "column")}
  min-height:100vh;
  background: #202124;
  p,
  h1 {
    color: grey;
  }
  h1 {
    font-size: 14.4rem;
  }
  p {
    font-size: 2rem;
  }
  div {
    display: flex;
  }
  button,
  a {
    background: #2185fc;
    font-size: 1.4rem;
    color: white;
    cursor: pointer;
    border: none;
    margin-top: 2rem;
    padding: 1.4rem 2.8rem;
    border-radius: 0.5rem;
    text-decoration: none;
    display: block;
    margin-right: 2rem;

    &:hover {
      background: #328cfa;
    }
  }
`;
