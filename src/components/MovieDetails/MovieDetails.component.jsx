import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import Rating from "components/Rating";
import {
  Wrapper,
  Picture,
  Content,
  Year,
  Title,
  Description,
} from "./MovieDetails.styles";

const MovieDetails = ({ title, year, image, overview, vote_average }) => {
  let history = useHistory();

  const handleClick = () => {
    history.go(-1);
  };

  return (
    <Wrapper>
      <div className="wrapper flex">
        <Picture>
          <img src={image} alt={title} />
        </Picture>
        <Content>
          <Year>{year}</Year>
          <Title>{title}</Title>
          <Description>{overview}</Description>
          <Rating rate={vote_average} />
        </Content>
      </div>
      <div className="wrapper text-right">
        <button className="link" type="button" onClick={handleClick}>
          Go back
        </button>
      </div>
    </Wrapper>
  );
};

export default memo(MovieDetails);
