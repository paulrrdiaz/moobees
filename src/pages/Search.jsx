import React from "react";
import { useStoreState } from "easy-peasy";
import isEmpty from "ramda/src/isEmpty";
import gt from "ramda/src/gt";
import gte from "ramda/src/gte";
import filter from "ramda/src/filter";
import Default from "layouts/Default";
import SearchBox from "components/SearchBox";
import FlatList from "components/FlatList";

const Search = () => {
  const popularMovies = useStoreState((state) => state.movies.popularMovies);
  const filteredMovies = useStoreState((state) => state.movies.filteredMovies);
  const stars = useStoreState((state) => state.movies.stars);
  const searchedMovies = isEmpty(filteredMovies)
    ? popularMovies
    : filteredMovies;
  const movies = gt(stars, 0)
    ? filter((m) => {
        const rate = Math.round(m.vote_average / 2) || 0;
        return gte(rate, stars - 1) && gte(stars, rate);
      }, searchedMovies)
    : searchedMovies;

  return (
    <Default>
      <div className="wrapper mt-2">
        <SearchBox full hidden filters />
      </div>
      <div className="wrapper">
        {isEmpty(movies) ? (
          <div className="text-center">No resulsts...</div>
        ) : (
          <FlatList movies={movies} />
        )}
      </div>
    </Default>
  );
};

export default Search;
