import React, { useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import { Global, css } from "@emotion/core";
import Router from "routes";
import globals from "styles/globals";

const App = () => {
  const fetchPopularMovies = useStoreActions(
    (actions) => actions.movies.fetchPopularMovies
  );

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  return (
    <>
      <Global
        styles={css`
          ${globals}
        `}
      />
      <Router />
    </>
  );
};

export default App;
