import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  display: block;
  overflow: hidden;
  position: relative;
`;

export const Picture = styled("picture")`
  display: block;
`;

export const Content = styled("div")`
  align-items: center;
  background-color: rgba(var(--yellow-darkness), 0.85);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  opacity: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover {
    opacity: 1;

    h2 {
      transform: translateY(0);
    }

    span {
      transform: translateY(0);
    }
  }
`;

export const Title = styled("h2")`
  color: rgb(var(--brown-darkness));
  font-family: var(--font-title);
  font-size: 1rem;
  line-height: 1.25;
  transform: translateY(50%);
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export const Year = styled("span")`
  color: rgb(var(--brown-darkness));
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.25;
  transform: translateY(-50%);
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;
