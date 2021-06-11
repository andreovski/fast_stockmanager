import "@pathofdev/react-tag-input/build/index.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F4F4F4;
    --text: #252525;
    --primary: #CD6E42;

    --white: #FFF;

    --gray-50: #E8E8E8;
    --gray-100: #C4C4C4;
    --gray-200: #A1A1A1;
    --gray-500: #717171;
    --gray-700: #515151;

    --red: #C84342;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }

    body {
      background: var(--background);
    }

    body, input, textarea, button {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
    }

    button {
      cursor: pointer;
    }

    .link, a {
      color: inherit;
      text-decoration: none;
    }

    [disable] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
