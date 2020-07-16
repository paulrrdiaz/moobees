import { action, computed, thunk } from "easy-peasy";
import * as API from "api";
import indexBy from "ramda/src/indexBy";
import merge from "ramda/src/merge";
import prop from "ramda/src/prop";

const moviesModel = {
  popularMovies: [],
  filteredMovies: [],
  stars: 0,
  moviesListById: computed((state) =>
    merge(
      indexBy(prop("id"), state.popularMovies),
      indexBy(prop("id"), state.filteredMovies)
    )
  ),
  setStars: action((state, payload) => {
    state.stars = payload;
  }),
  setPopularMovies: action((state, payload) => {
    state.popularMovies = payload;
  }),
  setFilteredMovies: action((state, payload) => {
    state.filteredMovies = payload;
  }),
  fetchPopularMovies: thunk(async (actions) => {
    const data = await API.fetchMovies();
    actions.setPopularMovies(data);
  }),
  fetchFilteredMovies: thunk(async (actions, query) => {
    const data = await API.searchMovie(query);
    actions.setFilteredMovies(data);
  }),
};

const generalModel = {};

export default {
  movies: moviesModel,
  general: generalModel,
};
