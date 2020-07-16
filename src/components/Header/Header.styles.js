import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const Wrapper = styled("header")`
  background-color: rgb(var(--yellow-darkness));
  padding: 0.75rem 0;
  z-index: 99;

  .wrapper {
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  color: rgb(var(--brown-darkness));
  font-family: var(--font-title);
  font-size: 1.8rem;
  letter-spacing: 3px;

  svg {
    margin: 0 3px;
  }
`;

export const Nav = styled("nav")`
  color: rgb(var(--brown-darkness));
  font-family: var(--font-title);
  font-size: 1.8rem;
  letter-spacing: 3px;

  ul {
    display: flex;
  }
`;

export const NavItem = styled(NavLink)`
  color: rgb(var(--brown-darkness));
  font-family: var(--font-title);
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;

  &[aria-current="page"] {
    text-decoration: underline;
  }
`;
