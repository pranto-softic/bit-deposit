/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import mq from "../lib/media-query";

const Home: NextPage = () => (
  <div>
    <div css={borderRedCss}>dkcdskljsdlkjdkls</div>
  </div>
);

const borderRedCss = css`
  ${mq({
    backgroundColor: ["red", "green", "blue", "blue", "blue"],
  })}
`;

export default Home;
