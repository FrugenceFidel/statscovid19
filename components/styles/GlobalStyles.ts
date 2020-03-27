import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap");

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  

  html {
    box-sizing: border-box;
    font-size: 50%;

    @media screen and (min-width: ${props => props.theme.screens?.tablet}) {
      & {
        font-size: 56%; 
      }
    }

    @media screen and (min-width: ${props => props.theme.screens?.tabletPro}) {
      & {
        font-size: 58%;
      }
    }

    @media screen and (min-width: ${props => props.theme.screens?.laptop}) {
      & {
        font-size: 62.5%; /* 10px/16px = 62.5% -> 1rem = 10px */
      }
    }
  }

  body {
    line-height: ${props => props.theme.lineHeight?.normal};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    font-family: 'Quicksand', sans-serif;
    font-size: ${props => props.theme.fontSize?.[16]};
    color: ${props => props.theme.colors?.black.primary};
    font-weight: 400;
  }

  h1,
  h2,
  h3, 
  h4, 
  h5, 
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre {
    margin: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }
`;

export default GlobalStyle;
