import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.wrapperBg};
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
