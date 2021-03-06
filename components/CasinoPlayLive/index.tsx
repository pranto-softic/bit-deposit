/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import casinoPlayImage from "../../assets/Casino_play_live_image.svg";
import ComponentButton from "../ComponentButton/index";
import Container from "../container";

const CasinoPlayLive: NextPage = () => (
  <div css={CasinoPlayLiveCss}>
    <Container>
      <Grid container className="flex content_center item_center">
        <Grid item xs={12} md={7} lg={7}>
          <div className="casino_play_image">
            <Image src={casinoPlayImage} />
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <div className="flex content_end">
            <div className="casino_play_content">
              <Typography variant="h3">Play Live</Typography>
              <Typography variant="h2">Casino</Typography>
              <Typography variant="h4">worldwide!!</Typography>

              <div className="flex content_end item_center">
                <ComponentButton
                  title="Explore"
                  icon={
                    <ArrowForwardIcon
                      style={{
                        backgroundColor: "#302A78",
                        padding: "4px",
                        color: "#fff",
                        borderRadius: "5px",
                        fontWeight: "700",
                        marginLeft: "20px",
                      }}
                    />
                  }
                  style={{
                    background: "#FFCC00",
                    borderRadius: "4px",
                    color: "#302A78",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "16px",
                    padding: "6px 15px",
                    marginTop: "20px",
                  }}
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>
);

const CasinoPlayLiveCss = css`
  background: #07005b;
  margin-bottom: 70px;
  padding: 60px 0px;

  .casino_play_content {
    color: #fff;

    h2 {
      color: #ffcc00;
      font-weight: 700;
      font-size: 124px;
      line-height: 150px;
      text-transform: uppercase;
      text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
    }

    h3 {
      font-weight: 700;
      font-size: 108px;
      line-height: 92px;
      text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
    }

    h4 {
      font-weight: 700;
      font-size: 80px;
      line-height: 92px;
      text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default CasinoPlayLive;
