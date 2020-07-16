import React from "react";
import Rating from "components/Rating";
import { Wrapper, Title } from "./FlatItem.styles";

const variants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { y: 50, opacity: 0 },
};

const FlatItem = ({ id, title, vote_average, index }) => {
  return (
    <Wrapper
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      to={`movies/${id}`}
    >
      <Title>{title}</Title>
      <Rating rate={vote_average} />
    </Wrapper>
  );
};

export default FlatItem;
