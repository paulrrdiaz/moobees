import React from "react";
import { Wrapper, Picture, Content, Title, Year } from "./PopularItem.styles";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const PopularItem = ({ title, image, year, id }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
  >
    <Wrapper to={`movies/${id}`}>
      <Picture>
        <img src={image} alt={title} />
      </Picture>
      <Content>
        <Year>{year}</Year>
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  </motion.div>
);

export default PopularItem;
