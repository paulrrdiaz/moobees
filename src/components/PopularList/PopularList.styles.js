import styled from "@emotion/styled";
import { media } from "styles/utils";

export const Wrapper = styled("div")`
  .wrapper {
    flex-direction: column;
  }

  ${media("medium")} {
    .wrapper {
      flex-direction: row;
    }
  }
`;

export const Title = styled("h2")`
  color: rgb(var(--brown-darkness));
  font-family: var(--font-title);
  font-size: 1.8rem;
  text-transform: uppercase;

  svg {
    fill: rgb(var(--yellow-darkness));
  }
`;

export const Principal = styled("div")`
  flex: 1;
  margin-bottom: 0.75rem;

  ${media("medium")} {
    margin-bottom: 0;
    margin-right: 0.75rem;
  }
`;

export const Thumbnails = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
  justify-content: space-between;

  > a,
  > div {
    width: 48.5%;

    ${media("medium")} {
      width: 23.85%;
    }

    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4) {
      margin-bottom: 1rem;

      ${media("medium")} {
        margin-bottom: 1.5rem;
      }
    }

    &:nth-of-type(5),
    &:nth-of-type(6) {
      margin-bottom: 1rem;

      ${media("medium")} {
        margin-bottom: 0rem;
      }
    }
  }
`;
