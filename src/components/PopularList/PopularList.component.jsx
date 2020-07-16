import React from "react";
import MovieItem from "components/PopularItem";
import Fire from "components/Icons/Fire";
import { Wrapper, Title, Principal, Thumbnails } from "./PopularList.styles";

const PopularList = ({ movies = [] }) => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Title>
          <Fire /> Popular Movies
        </Title>
      </div>
      <div className="wrapper flex">
        <Principal>
          <MovieItem {...movies[0]} />
        </Principal>
        <Thumbnails>
          {movies.slice(1, 9).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </Thumbnails>
      </div>
    </Wrapper>
  );
};

export default PopularList;
