/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import type { NextPage } from "next";
import AffiliateProgram from "../components/AffiliateProgram";
import CasinoPlayLive from "../components/CasinoPlayLive";
import HeroBanner from "../components/HeroBanner";
import NewsLetter from "../components/NewsLetter";
import OnlineGame from "../components/OnlineGame";
import Footer from "../components/partials/Footer";
import PaymentSystem from "../components/PaymentSystem";
import TopNavBar from "../components/top-nev-bar";
import UpComingMatch from "../components/UpComingMatch";

const Home: NextPage = () => (
  <>
    {/* <div css={borderRedCss}>Bit deposit BD</div> */}
    <TopNavBar />
    <HeroBanner />
    <PaymentSystem />
    <CasinoPlayLive />
    <AffiliateProgram />
    <OnlineGame />
    <UpComingMatch />
    <NewsLetter />
    <Footer />
  </>
);

// const borderRedCss = css`
//   ${mq({
//     backgroundColor: ["red", "green", "blue", "blue", "blue"],
//   })}
// `;

export default Home;
