import { css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
import emotionReset from "emotion-reset";
import reset from "./reset";
import universals from "./universals";

const Globals = css`
  /* stylelint-disable */
  ${emotionNormalize};
  ${emotionReset};

  :root {
    --white: 255, 255, 255; /* #ffffff */
    --black: 0, 0, 0; /* #000000 */
    --grey: 76, 86, 106; /* #4C566A */
    --snow: 236, 239, 244; /* #ECEFF4 */
    --blue: 94, 129, 172; /* #5E81AC */
    --skyblue: 129, 161, 193; /* #81A1C1 */
    --red: 231, 76, 60;
    --green: 39, 174, 96;
    --yellow: 246, 224, 0;
    --yellow-darkness: 249, 201, 1;
    --brown: 152, 91, 16;
    --brown-darkness: 107, 71, 1;
    --font-title: "Montserrat", Arial, Helvetica, sans-serif;
    --font-normal: "Roboto", Arial, Helvetica, sans-serif;
  }

  ${reset};
  ${universals};
  /* stylelint-enable */
`;

export default Globals;
