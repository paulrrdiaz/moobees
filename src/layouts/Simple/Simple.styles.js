import styled from "@emotion/styled";

export const Container = styled("div")`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  padding-top: 5vh;

  .wrapper {
    background-color: rgb(var(--white));
    border-radius: 4px;
    border: 1px solid rgba(var(--brown-darkness), 0.15);
    box-shadow: 0 0 5px 1px rgba(var(--brown), 0.1);
    max-width: 500px;
    padding: 20px;
    text-align: center;
  }

  .title {
    padding-bottom: 0;
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }
`;
