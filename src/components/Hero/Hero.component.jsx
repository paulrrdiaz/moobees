import React from "react";
import SearchBox from "components/SearchBox";
import { Wrapper, Title, Subtitle } from "./Hero.styles";

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <Title>All your favorite moobees, in one place</Title>
        <Subtitle>Looking for someting?</Subtitle>
        <SearchBox />
      </div>
    </Wrapper>
  );
};

export default Hero;
