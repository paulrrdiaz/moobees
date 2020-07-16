import React from "react";
import { useStoreState } from "easy-peasy";
import Default from "layouts/Default";

import Hero from "components/Hero";
import PopularList from "components/PopularList";

const Home = () => {
  const movies = useStoreState((state) => state.movies.popularMovies);

  return (
    <Default>
      <Hero />
      <PopularList movies={movies} />
    </Default>
  );
};

export default Home;
