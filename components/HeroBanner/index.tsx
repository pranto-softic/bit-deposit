/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import Slider from "react-slick";
import banner01 from "../../assets/Hero-banner/hero-banner-01.png";
import ComponentButton from "../ComponentButton/index";
import Container from "../container";

const HeroBanner: NextPage = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div css={HeroBannerArea}>
      <Container>
        <Slider {...settings}>
          <div>
            <div
              style={{
                background: "#170F49",
                objectFit: "cover",
                color: "#fff",
                padding: "40px",
              }}
            >
              <Grid container className="flex content_center item_center">
                <Grid item xs={12} md={6} lg={5}>
                  <div className="banner_content">
                    <Typography variant="h1">
                      Invest on your Favorite Team!!
                    </Typography>
                    <Typography>
                      Place bet on your Favourite team & Earn Money. Easy
                      Deposit & Withdraw for the First time in Bangladesh!!
                    </Typography>

                    <div className="hero_btn_group flex item_center">
                      <ComponentButton
                        title="Start Betting"
                        style={{
                          background: "#F68D29",
                          borderRadius: "10px",
                          color: "#fff",
                          textTransform: "capitalize",
                          fontWeight: "600",
                          fontSize: "14px",
                          padding: "10px 20px",
                          marginRight: "10px",
                        }}
                      />

                      <ComponentButton
                        title="Learn More"
                        style={{
                          background: "#302A78",
                          borderRadius: "10px",
                          color: "#fff",
                          textTransform: "capitalize",
                          fontWeight: "600",
                          fontSize: "14px",
                          padding: "10px 20px",
                        }}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                  <div className="flex content_end item_center">
                    <Image src={banner01} alt="banner" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

const HeroBannerArea = css`
  margin-bottom: 70px;

  .banner_content {
    h1 {
      font-weight: 700;
      font-size: 76px;
      line-height: 94px;
    }

    p {
      width: 70%;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: #ffffff;
      opacity: 0.6;
      margin-top: 15px;
    }

    .hero_btn_group {
      margin-top: 50px;
    }
  }
`;

export default HeroBanner;
