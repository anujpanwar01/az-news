import styled from "styled-components";
import { flex } from "../../global-styles/resuable.styles";

export const FullDayNavigation = styled.nav`
  display: flex;
  @media only screen and (max-width: 550px) {
    margin-bottom: 2rem;
  }
  .unit {
    display: flex;
    button {
      height: 3.5rem;
      width: 3.5rem;
      overflow: hidden;
      font-size: 1.4rem;
      box-shadow: 0 0 2rem #00000070;
      border-radius: 50%;
      cursor: pointer;
      color: white;
      &:not(:last-child) {
        margin-right: 1.6rem;
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
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;
  }
  .active {
    border-bottom: 3px solid black;
  }
  .non-active {
    color: #0000007a;
  }
  span {
    transition: transform 300ms ease-in;
    border-radius: 50%;
  }
  .down {
    transform: translate(0, 0) rotate(0deg);
    background: black;
    color: white;
    position: absolute;
    top: 0%;
    left: 0%;
    height: 3.6rem;
    width: 3.6rem;
    ${flex()}
    font-size:1.8rem
  }
  .no-down {
    position: absolute;
    transform: translate(200%, -100%) rotate(-45deg);
  }
  .no-up {
    position: absolute;
    transform: translate(-200%, 100%) rotate(-45deg);
  }

  .up {
    transform: translate(0, 0) rotate(0deg);
    background: white;
    color: black;
    position: absolute;
    top: 0%;
    left: 0%;
    height: 3.6rem;
    width: 3.6rem;
    ${flex()}
    font-size:1.8rem
  }
`;
