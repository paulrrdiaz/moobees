import { css } from "@emotion/core";

export default css`
  main {
    margin: 40px 0;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 1024px;
    position: relative;
    width: 86%;
    z-index: 1;

    & + & {
      margin-top: 1rem;
    }
  }

  .relative {
    position: relative;
  }

  .flex {
    display: flex;
  }

  .link {
    color: rgb(var(--brown-darkness));
    text-decoration: underline;
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  .mt {
    &-1 {
      margin-top: 1rem;
    }
    &-2 {
      margin-top: 2rem;
    }
    &-3 {
      margin-top: 3rem;
    }
  }
`;
