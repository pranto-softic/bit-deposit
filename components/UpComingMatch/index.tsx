/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import Container from "../container";

const UpComingMatch: NextPage = () => (
  <div css={UpComingMatchCss}>
    <Container>
      <div className="header_title">
        <Typography variant="h2">Upcoming Match</Typography>
        <Typography>
          Here is some upcoming matches that has the most intense Betting around
          the Globe.
        </Typography>
      </div>
    </Container>
  </div>
);

const UpComingMatchCss = css`
  margin: 40px 0;

  .header_title {
    color: #ffffff;
    text-align: center;

    h2 {
      font-weight: 600;
      font-size: 48px;
      line-height: 72px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      opacity: 0.6;
      width: 20%;
      margin: 0 auto;
    }
  }
`;

export default UpComingMatch;
