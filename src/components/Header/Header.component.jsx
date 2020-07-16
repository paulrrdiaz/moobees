import React from "react";
import { Wrapper, Logo, Nav, NavItem } from "./Header.styles";
import Bee from "components/Icons/Bee";

const Header = () => {
  return (
    <Wrapper>
      <div className="wrapper flex">
        <Logo to="/">
          MOO
          <Bee />S
        </Logo>
        <Nav>
          <ul>
            <NavItem to="/search">Search</NavItem>
          </ul>
        </Nav>
      </div>
    </Wrapper>
  );
};

export default Header;
