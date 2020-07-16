import React from "react";
import FlatItem from "components/FlatItem";

const renderFlatItem = (movie, i) => (
  <FlatItem index={i} key={movie.id} {...movie} />
);

const FlatList = ({ movies = [] }) => {
  return <div>{movies.map(renderFlatItem)}</div>;
};

export default FlatList;
