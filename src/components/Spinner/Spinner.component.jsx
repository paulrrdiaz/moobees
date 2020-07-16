import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { SpinnerWrapper } from "./Spinner.styles";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ClipLoader color="#f9c901" />
    </SpinnerWrapper>
  );
};

export default Spinner;
