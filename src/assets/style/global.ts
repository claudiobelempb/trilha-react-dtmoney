import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, input, textarea, button {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html, body, #root {
		height:100%;
    background: ${props => props.theme.colors.light}
	}

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: ${props => props.theme.colors.light};
    -webkit-font-smoothing: antialiased;
  }

`;