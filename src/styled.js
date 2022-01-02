import { createGlobalStyle } from 'styled-components';
import { fonts, breakpoints, themeColors } from './styles/config';

const GlobalStyling = createGlobalStyle`  
  body {
    position: relative;
    font-family: ${fonts.body};
    color: ${themeColors.gray[900]};
  }

  html {
    font-size: .875rem;
  }

  a {
    text-decoration: none;
    font-weight: 500;
  }

  h1 {
    font-family: ${fonts.heading};
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    color: currentColor;
  }

  h2 {
    font-family: ${fonts.heading};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: ${fonts.body};
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.5rem;
    color: ${themeColors.gray[500]};
    margin-bottom: .5rem;
  }

  i, em {
    font-style: italic;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  p {
    font-family: ${fonts.body};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  @media all and (min-width: ${breakpoints.m}) {
    html {
      font-size: 100%;
    }
  }
`;

export default GlobalStyling;