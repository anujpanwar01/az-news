import styled from "styled-components";
import { Link } from "react-router-dom";
export const Image = styled(Link)`
  height: 30rem;
  overflow: hidden;
  position: relative;
  &:hover > figcaption {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  &:hover > img {
    transform: scale(1.1);
    filter: blur(4px) brightness(80%);
  }
  img {
    width: 100%;
    height: 100%;
    transition: all 1s ease;
  }
  figcaption {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 1s ease;
    color: white;
    transform: translate(-50%, 100%);
    font-size: 1.8rem;
    text-align: center;
    opacity: 0;
    backface-visibility: hidden;
  }
`;
export const Loader = styled.div`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  width: 100%;
  height: 100%;

  .image {
    height: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
