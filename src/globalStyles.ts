import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;

    ::-webkit-scrollbar {
      border-radius: 10px;
      width: 3px;
      background: ${({ theme }) => theme.colors.cardTitle};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.cardBg};
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.cardBg};
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.cardBg};
    }
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
