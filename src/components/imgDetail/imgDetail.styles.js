import styled, { css } from "styled-components";
import { flex } from "../../global-styles/resuable.styles";

export const Tags = styled.div`
  display: flex;
  margin-top: 2rem;
  div {
    ${flex()}
    &:not(:last-child) {
      margin-right: 1.4rem;
    }
    p {
      margin-left: 0.6rem;
    }
  }
`;

export const Auther = styled.div`
  align-self: flex-end;
  padding: 0.6rem;
  background: #66b8b7;
  cursor: pointer;
  position: absolute;
  top: 10%;
  right: 0%;
  transform: translatex(100%);
  transition: all 500ms ease;
  ${flex()};
  img {
    width: 25%;
    &:hover ~ .img-2 {
      transform: scale(1);
    }
  }
  .img-2 {
    position: absolute;
    top: 70%;
    width: 40%;
    left: 10%;
    transform: scale(0);
    transform-origin: top left;
    transition: transform 1s ease;
    transition-delay: 500ms;
    border: 2px solid white;
  }
  figure {
    display: flex;
    align-self: stretch;
  }
  div {
    margin-left: 0.6rem;
    letter-spacing: 1px;
    ${flex("center", "column")}
    h4 ,p {
      font-size: 0.9rem;
      align-self: flex-start;
    }
  }
  .total-like,
  .total-photo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0.6rem;
    p {
      align-self: center;
      margin-left: 0.6rem;
    }
  }
  .total-like {
    margin-right: 2rem;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 2rem;
  justify-self: flex-end;
  a {
    font-size: 1.4rem;
    padding: 1.2rem 2.4rem;
    text-decoration: none;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    background: ${(props) => console.log(props)};
  }
  .download {
    margin-right: 1.2rem;
    ${(props) => {
      if (props.children[0].props.hover === "download") {
        return css`
          color: white;
          background-color: #66b8b7;
        `;
      } else {
        return css`
          color: blue;
          background-color: white;
        `;
      }
    }};
  }
  .photograph {
    ${(props) => {
      if (props.children[1].props.hover === "auth") {
        return css`
          color: white;
          background-color: #66b8b7;
        `;
      } else {
        return css`
          color: blue;
          background-color: white;
        `;
      }
    }};
  }
`;

export const TextContainer = styled.div`
  transform: translateY(150%);
  min-width: 100%;
  ${"" /* min-height: 100%; */}
  transition: all 500ms ease;
  color: white;
  padding: 2rem 2.4rem 1rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h3 {
    font-size: 1.6rem;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 25em) {
    transform: translateY(170%);
  }
`;
export const ImgContainer = styled.div`
  overflow: hidden;
  height: 35rem;
  box-shadow: 0 1.2rem 2.4rem rgb(0 0 0 / 25%);
  border-radius: 1rem;
  ${flex("center", "column")}
  width: 90rem;
  transition: all 0.6s ease;
  background-image: ${({ $imgUrl }) => `url(${$imgUrl})}`};
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 1.2rem 3.2rem rgb(0 0 0 / 50%);
    background-image: ${({ $imgUrl }) =>
      `linear-gradient(hsl(0deg 0% 13% / 30%), hsl(0deg 0% 13% / 30%)),url(${$imgUrl})}`};
  }
`;
export const Image = styled.section`
  ${flex()};
  min-height: 100vh;
  postion: relative;
  ${ImgContainer}:hover > ${TextContainer} {
    transform: translateY(50%);
  }
  ${ImgContainer}:hover > ${Auther} {
    transform: translateX(0);
  }
  @media only screen and (max-width: 56.25em) {
    padding: 1rem;
  }
  @media only screen and (max-width: 25em) {
    padding: 8rem 1rem;
    min-height: auto;
    align-items: flex-start;
  }
`;
export const Figure = styled.figure`
  img {
    width: 40%;
    height: 100%;
    width: 100%;
    height: 90%;
    transform: scale(1.3);
  }
`;
export const FigCap = styled.figcaption``;
