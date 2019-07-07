import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    text-rendering: optmizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    /* background: #181818; */
    background: #fff;
    font-family: Helvetica, sans-serif;
    color: #181818;
  }

  button{
    cursor: pointer;
  }
`;
export default GlobalStyle;
