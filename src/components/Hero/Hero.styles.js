import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  background-color: rgb(var(--yellow-darkness));
  color: rgb(var(--brown-darkness));
  margin-bottom: 2rem;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;

  > div {
    max-width: 90%;
  }
`;

export const Title = styled("h2")`
  font-family: var(--font-title);
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled("h3")`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;
