import styled from "@emotion/styled";
import styledMap from "styled-map";

export const Stars = styled("div")`
  display: flex;
`;

export const Star = styled("div")`
  cursor: ${styledMap`
    dynamic: pointer;
    default: default;
  `};

  & + & {
    margin-left: 0.5rem;
  }
`;
