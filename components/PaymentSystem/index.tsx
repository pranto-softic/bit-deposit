/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import Image from "next/image";
import Slider from "react-slick";
import bkashAgent from "../../assets/paymentLogo/bkash_agent_payment.svg";
import bkashPersonal from "../../assets/paymentLogo/bkash_personal_payment.svg";
import localAgent from "../../assets/paymentLogo/local_payment.svg";
import nagadAgent from "../../assets/paymentLogo/nagad_agent_payment.svg";
import nagadPersonal from "../../assets/paymentLogo/nagad_personal_payment.svg";
import rocket from "../../assets/paymentLogo/rocket_payment.svg";
import Container from "../container";

const PaymentSystem: NextPage = () => {
  function paymentInfo(id: number, paymentIcon: string) {
    return {
      id,
      paymentIcon,
    };
  }

  const paymentSystemData = [
    paymentInfo(1, bkashPersonal),
    paymentInfo(2, bkashAgent),
    paymentInfo(3, nagadPersonal),
    paymentInfo(4, nagadAgent),
    paymentInfo(5, rocket),
    paymentInfo(6, localAgent),
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div css={PaymentSystemCss}>
      <Container>
        <Slider {...settings}>
          {paymentSystemData?.length &&
            paymentSystemData.map((paymentItem) => (
              <div key={paymentItem?.id}>
                <div className="flex content_center item_center">
                  <Image src={paymentItem?.paymentIcon} />
                </div>
              </div>
            ))}
        </Slider>
      </Container>
    </div>
  );
};

const PaymentSystemCss = css`
  margin-bottom: 70px;
  padding: 30px;
  background-image: url("https://img.freepik.com/free-vector/abstract-halftone-background-theme_23-2148598184.jpg?w=1380");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default PaymentSystem;
