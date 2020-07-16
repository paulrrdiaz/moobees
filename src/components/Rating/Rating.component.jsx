import React from "react";
import map from "ramda/src/map";
import range from "ramda/src/range";
import StarOn from "components/Icons/StarOn";
import StarOff from "components/Icons/StarOff";
import { Stars, Star } from "./Rating.styles";

const renderStar = ({ dynamic, handleClick, starsOn, rate }) => (i) => {
  const props = dynamic
    ? {
        dynamic,
        onClick: () => {
          const index = i + 1;
          starsOn === index ? handleClick(0) : handleClick(index);
        },
        key: `star-${i + 1}`,
      }
    : {
        key: `star-${i + 1}`,
      };

  return <Star {...props}>{starsOn > i ? <StarOn /> : <StarOff />}</Star>;
};

const Rating = ({ dynamic, handleClick, rate = 0, maxStars = 5 }) => {
  const starsOn = Math.round(rate / 2);

  return (
    <Stars>
      {map(
        renderStar({ dynamic, handleClick, starsOn, rate }),
        range(0, maxStars)
      )}
    </Stars>
  );
};

export default Rating;
