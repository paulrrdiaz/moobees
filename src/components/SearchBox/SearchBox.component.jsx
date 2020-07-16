import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import debounce from "lodash/debounce";
import isEmpty from "ramda/src/isEmpty";
import { AnimatePresence } from "framer-motion";
import Rating from "components/Rating";
import {
  Wrapper,
  Control,
  Input,
  List,
  ListItem,
  ListButton,
  Filters,
} from "./SearchBox.styles";

const SearchBox = ({ full, hidden = false, filters = false }) => {
  const filteredMovies = useStoreState((state) => state.movies.filteredMovies);
  const fetchFilteredMovies = useStoreActions(
    (actions) => actions.movies.fetchFilteredMovies
  );
  const setFilteredMovies = useStoreActions(
    (actions) => actions.movies.setFilteredMovies
  );
  const stars = useStoreState((state) => state.movies.stars);
  const setStars = useStoreActions((actions) => actions.movies.setStars);

  useEffect(() => {
    !hidden && setFilteredMovies([]);
  }, [hidden, setFilteredMovies]);

  const onSearchChange = debounce((value) => {
    isEmpty(value)
      ? setFilteredMovies([])
      : fetchFilteredMovies(encodeURIComponent(value));
  }, 500);

  const showList = !hidden && !isEmpty(filteredMovies);

  return (
    <Wrapper full={full}>
      <Control>
        <Input
          aria-label="Search moobees"
          placeholder="Search moobees"
          onChange={(e) => onSearchChange(e.target.value)}
          type="text"
        />
      </Control>
      <AnimatePresence>
        {showList && (
          <List
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            {filteredMovies.slice(0, 5).map((movie) => (
              <ListItem to={`movies/${movie.id}`} key={movie.id}>
                {movie.title}
              </ListItem>
            ))}
            <ListButton to="/search">
              want to add some filters? sure...
            </ListButton>
          </List>
        )}
      </AnimatePresence>
      {filters && (
        <Filters>
          <h5>Filters:</h5>
          <Rating
            dynamic
            handleClick={(index) => setStars(index)}
            rate={stars * 2}
          />
        </Filters>
      )}
    </Wrapper>
  );
};

export default SearchBox;
