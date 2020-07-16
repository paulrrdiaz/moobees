import styled from "@emotion/styled";
import { media } from "styles/utils";

export const Wrapper = styled("article")`
  margin-top: 2rem;

  .wrapper {
    flex-direction: column;

    ${media("medium")} {
      flex-direction: row;
    }
  }
`;

export const Picture = styled("picture")`
  flex: 1;
  margin-bottom: 1rem;

  ${media("medium")} {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

export const Content = styled("div")`
  flex: 2;
`;

export const Year = styled("span")`
  display: block;
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

export const Title = styled("h2")`
  font-size: 1.8rem;
  font-family: var(--font-title);
  margin-bottom: 1rem;
`;

export const Description = styled("div")`
  line-height: 1.4;
  margin-bottom: 1rem;
`;
