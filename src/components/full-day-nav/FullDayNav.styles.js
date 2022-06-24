import styled from "styled-components";
import { flex } from "../../global-styles/resuable.styles";

export const FullDayNavigation = styled.nav`
  display: flex;
  .unit {
    button {
      height: 3rem;
      width: 3rem;
      font-size: 1.4rem;
      background: black;
      border-radius: 50%;
      cursor: pointer;
      color: white;
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  ul {
    list-style: none;
    margin-left: auto;
    ${flex()}
    padding:0 1rem 0 0
  }
  li {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
  button {
    font-size: 1.8rem;
    color: black;
    text-decoration: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .active {
    border-bottom: 3px solid black;
  }
  .non-active {
    color: #0000007a;
  }
`;
