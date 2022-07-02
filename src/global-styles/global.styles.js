import { createGlobalStyle, css } from "styled-components";
import {
  whiteThemeTextColor,
  blackThemeTextColor,
  blackThemeBgColor,
  whiteThemeBgColor,
  flex,
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
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    min-width: 100%;
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
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
  .status{
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  ${flex()};
  padding:0.6rem;
  animation:fade-in 1s ease;

 
  button{
  position:absolute;
  right:5%;
  background:transparent;
  border:none;
  height:2.4rem;
  width:2.4rem;
  cursor:pointer;

  &::after,&::before{
    content: "";
    height: 2px;
    position: absolute;
    width: 60%;
  }
  &::after{
    transform:rotate(45deg);
  }
  &::before{
    transform:rotate(-45deg);
  }

}

.error-btn{
  &::after,
  &::before{
    background-color:#9e0000;
  }
  }
  .pending-btn{
    display:none;
  }
  .success-btn{
    &::after,
    &::before{
    display:block;
    background:#007259;
  }
  }
}
.form{
  margin-bottom: 2rem;
  ${flex()}

  input {
    font-size: 1.8rem;
    width: 80%;
    padding: 1rem;
    background: transparent;
    border: none;
    &::placeholder {
      font-size: 1.6rem;
    }
    &:focus,
    &:active {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
}
.pending-text,.success-text{
  color:white;
}
.pending-status{
  background:blue
}
.pending-svg,
.success-svg,
.error-svg{
  fill:#fff;
  margin-right:0.6rem;
}

.pending-svg{
  
animation:cycle 1s infinite;

}
  .error-status{
    background:#ff000073;
 
  }

  .error-text{
    color:#9e0000 !important;
  }
  .error-svg{
    fill:#9e0000;
    margin-right:0.6rem;
  
  }
  .success-svg{
    animation:fade-in 2s ease-in;
  }
  .success-status{
    background:#5cc1ab;
  }
  
  @keyframes fade-in{
    from{
      opacity:0;
    }
    to{
      opacity:1;
    }
  }
  @keyframes cycle{
    from{
      transform:rotate(0deg)
    }
    to{
      transform:rotate(360deg)
    }
  }
  .centered{
    ${flex()};
    height:100vh;
  }
  .error-text{
    color:red;
    font-size:1.8rem;
  }
`;
