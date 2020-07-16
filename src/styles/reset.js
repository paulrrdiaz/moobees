import { css } from "@emotion/core";

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-moz-selection {
    background-color: rgba(var(--grey), 0.5);
    color: rgb(var(--snow));
  }
  ::selection {
    background-color: rgba(var(--grey), 0.5);
    color: rgb(var(--snow));
  }

  ::placeholder {
    color: rgb(var(--blue));
    font-style: italic;
  }

  html {
    font-size: 16px;
    line-height: normal;
  }

  body {
    background-color: rgb(var(--snow));
    color: rgb(var(--grey));
    cursor: default;
    font-family: var(--font-normal);
  }

  a {
    color: inherit;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    outline: 0;
    padding: 0;
  }

  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
  }

  input {
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;
