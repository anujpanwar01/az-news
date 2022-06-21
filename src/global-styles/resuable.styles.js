import { css } from "styled-components";

export const whiteThemeTextColor = "#000";
export const blackThemeTextColor = "#fff";
export const whiteThemeBgColor = "#e9e9e9";
export const blackThemeBgColor = "#000000e6";

export const flex = (position = "center", direction = "row") => {
  return css`
    display: flex;
    align-items: center;
    justify-content: ${position};
    flex-direction: ${direction};
  `;
};
