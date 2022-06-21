import { createGlobalStyle, css } from "styled-components";
import {
  whiteThemeTextColor,
  blackThemeTextColor,
  blackThemeBgColor,
  whiteThemeBgColor,
} from "./resuable.styles";
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size:62.5%;
    @media only screen and (max-width:34.375em){
    font-size:56.25%
    }
  }
  body{
    font-family: 'Inter', sans-serif;

    ${(props) => {
      switch (props.theme) {
        case "dark":
          return css`
            color: ${blackThemeTextColor};
            background-color: ${blackThemeBgColor};
          `;
        default:
          return css`
            color: ${whiteThemeTextColor};
            background-color: ${whiteThemeBgColor};
          `;
      }
    }}
  }
`;
