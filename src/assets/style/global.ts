import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.light};
    -webkit-font-smoothing: antialiased;
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
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html, body, #root {
		height:100%;
    background: ${(props) => props.theme.colors.light}
	}

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: ${(props) => props.theme.colors.gray_light};
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.2);
    }
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  .font-zero {
    font-size: 0;
  }

`;
