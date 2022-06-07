/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import Slider from "react-slick";
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
            <img
              src="https://cdn.pixabay.com/photo/2016/11/10/05/09/bitcoin-1813503_960_720.jpg"
              alt=""
              height="100%"
              width="100%"
              style={{ height: "80vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/10/05/11/bitcoin-1813505_960_720.jpg"
              alt=""
              height="100%"
              width="100%"
              style={{ height: "80vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2017/12/26/21/43/blockchain-3041480_960_720.jpg"
              alt=""
              height="100%"
              width="100%"
              style={{ height: "80vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/02/07/20/52/bitcoin-3137984_960_720.jpg"
              alt=""
              height="100%"
              width="100%"
              style={{ height: "80vh", objectFit: "cover" }}
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

const HeroBannerArea = css`
  margin-bottom: 70px;
`;

export default HeroBanner;
