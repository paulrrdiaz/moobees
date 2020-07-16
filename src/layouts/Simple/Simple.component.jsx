import React from "react";
import { Container } from "./Simple.styles";

const Simple = ({ children }) => {
  return (
    <>
      <Container>
        <div className="wrapper">{children}</div>
      </Container>
    </>
  );
};

export default Simple;
