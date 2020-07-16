import React from "react";
import { useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import Default from "layouts/Default";
import Details from "components/MovieDetails";

const MovieDetail = () => {
  const { id } = useParams();
  const movies = useStoreState((state) => state.movies.moviesListById);
  const movie = movies[id];

  return (
    <Default>
      <Details {...movie} />
    </Default>
  );
};

export default MovieDetail;
