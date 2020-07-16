import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import { Wrapper, Container } from "./Default.styles";

const Default = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

export default Default;
