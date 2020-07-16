import styled from "@emotion/styled";
import styledMap from "styled-map";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled("div")`
  position: relative;
  margin: 0 auto;
  max-width: ${styledMap`
    full: 100%;
    default: 80%;
  `};
`;

export const Control = styled("div")``;

export const Input = styled("input")`
  display: block;
  height: 50px;
  width: 100%;
  padding: 0 1rem;
  border-radius: 4px;
`;

export const List = styled(motion.div)`
  background-color: rgb(var(--white));
  border-radius: 4px;
  box-shadow: 0 0 10px 1px rgba(var(--brown-darkness), 0.5);
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
`;

export const ListItem = styled(Link)`
  display: block;
  padding: 1rem 0.5rem;

  & + & {
    border-top: 1px solid rgba(var(--brown), 0.3);
  }

  &:hover {
    background-color: rgba(var(--brown), 0.25);
  }
`;

export const ListButton = styled(Link)`
  background-color: rgb(var(--brown-darkness));
  color: rgb(var(--white));
  display: block;
  padding: 1rem 0.5rem;
`;

export const Filters = styled("div")`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
