/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Footer from "../components/partials/Footer";
import TopNavBar from "../components/top-nev-bar";
import mq from "../lib/media-query";

const Home: NextPage = () => (
  <>
    <div css={borderRedCss}>Bit deposit BD</div>
    <TopNavBar />

    <Footer />
  </>
);

const borderRedCss = css`
  ${mq({
    backgroundColor: ["red", "green", "blue", "blue", "blue"],
  })}
`;

export default Home;
