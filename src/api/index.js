import axios from "axios";
import concat from "ramda/src/concat";
import map from "ramda/src/map";
import pipe from "ramda/src/pipe";
import take from "ramda/src/take";
import { assoc } from "ramda";

const {
  REACT_APP_TMDB_API_KEY,
  REACT_APP_TMDB_API_ENDPOINT,
  REACT_APP_TMDB_API_ASSETS,
} = process.env;

const fetch = axios.create({
  baseURL: REACT_APP_TMDB_API_ENDPOINT,
  timeout: 1000,
});

fetch.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = REACT_APP_TMDB_API_KEY;
  return config;
});

const parseItem = (item) =>
  pipe(
    assoc("year", take(4, item.release_date || "2000")),
    assoc("image", concat(REACT_APP_TMDB_API_ASSETS, item.poster_path || ""))
  )(item);

export const fetchMovies = async () => {
  try {
    const {
      data: { results },
    } = await fetch.get("/discover/movie?sort_by=popularity.desc");

    return map(parseItem, results);
  } catch (error) {
    console.error(error);
  }
};

export const searchMovie = async (query) => {
  try {
    const {
      data: { results },
    } = await fetch.get(`/search/movie?query=${query}`);

    return map(parseItem, results);
  } catch (error) {
    console.error(error);
  }
};
