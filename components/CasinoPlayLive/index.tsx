/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import casinoPlayImage from "../../assets/Casino_play_live_image.svg";
import Container from "../container";

const CasinoPlayLive: NextPage = () => (
  <div css={CasinoPlayLiveCss}>
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={7}>
          <Image src={casinoPlayImage} />
        </Grid>
        <Grid item lg={5}>
          <Typography variant="h2">
            Play Live <span>Casino</span> worldwide!!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </div>
);

const CasinoPlayLiveCss = css`
  background: #07005b;
  margin-bottom: 70px;
  padding: 30px 0px;
  color: #fff;
`;

export default CasinoPlayLive;
