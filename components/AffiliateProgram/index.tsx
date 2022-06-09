/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import affiliateProgramImage from "../../assets/affiliate-image.png";
// import imagePath from "../../assets/affiliate-program-banner.png";
import ComponentButton from "../ComponentButton";
import Container from "../container";

const AffiliateProgram: NextPage = () => (
  <div css={AffiliateProgramCss}>
    <Container>
      <Grid container className="flex content_center item_center">
        <Grid item xs={12} md={5} lg={5}>
          <div className="flex content_start">
            <div className="casino_play_content">
              <Typography variant="h3">Make Money With Our</Typography>
              <Typography variant="h2">AFFILIATE</Typography>
              <Typography variant="h4">PROGRAM</Typography>

              <div className="flex content_start item_center">
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
                    background: "#fff",
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

        <Grid item xs={12} md={7} lg={7}>
          <div className="casino_play_image flex content_end item_center">
            <Image src={affiliateProgramImage} />
          </div>
        </Grid>
      </Grid>
    </Container>
  </div>
);

const AffiliateProgramCss = css`
  margin-bottom: 70px;
  background-image: url("../../assets/affiliate-program-banner.png");
`;

export default AffiliateProgram;
