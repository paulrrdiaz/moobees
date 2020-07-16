import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.custom(Link))`
  align-items: center;
  background-color: rgb(var(--white));
  border-radius: 4px;
  display: flex;
  padding: 1rem 1rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const Title = styled("h3")`
  flex: 1;
`;
