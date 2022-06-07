/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import Slider from "react-slick";
import matchImage2 from "../../assets/emojione_flag-for-argentina.svg";
import matchImage1 from "../../assets/emojione_flag-for-bangladesh.svg";
import ComponentButton from "../ComponentButton/index";
import Container from "../container";

const UpComingMatch: NextPage = () => {
  function upComingMatchCard(
    id: number,
    title: string,
    matchDate: string,
    timeDuration: string,
    matchTime: string,
    timeZone: string
  ) {
    return {
      id,
      title,
      matchDate,
      timeDuration,
      matchTime,
      timeZone,
    };
  }

  const upComingMatchData = [
    upComingMatchCard(1, "Cricket", "06 SEP", "1d 12h 24m", "1:00", "BDT"),
    upComingMatchCard(2, "Football", "06 SEP", "1d 12h 24m", "1:00", "BDT"),
    upComingMatchCard(3, "Basketball", "06 SEP", "1d 12h 24m", "1:00", "BDT"),
    upComingMatchCard(4, "Tennis", "06 SEP", "1d 12h 24m", "1:00", "BDT"),
    upComingMatchCard(5, "Golf", "06 SEP", "1d 12h 24m", "1:00", "BDT"),
    upComingMatchCard(6, "Badminton", "06 SEP", "1d 12h 24m", "1:00", "BDT"),
    upComingMatchCard(7, "Baseball", "06 SEP", "1d 12h 24m", "1:00", "BDT"),
    upComingMatchCard(8, "Soccer", "06 SEP", "1d 12h 24m", "1:00", "BDT"),
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div css={UpComingMatchCss}>
      <Container>
        <div className="header_title">
          <Typography variant="h2">Upcoming Match</Typography>
          <Typography>
            Here is some upcoming matches that has the most intense Betting
            around the Globe.
          </Typography>

          <ComponentButton
            title="More UpComing Match"
            style={{
              background: "#FFCC00",
              borderRadius: "8px",
              color: "#12133D",
              textTransform: "capitalize",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "21px",
              padding: "13px 20px",
              marginTop: "20px",
            }}
          />
        </div>

        <div>
          <Slider {...settings}>
            {upComingMatchData?.length &&
              upComingMatchData.map((match) => (
                <div key={match?.id} className="match_card_wrapper">
                  <div className="match_card">
                    <Typography className="match_title">
                      {match?.title}
                    </Typography>

                    <div
                      className="flex content_between item_center"
                      style={{ margin: "20px 0px" }}
                    >
                      <div className="text_center">
                        <Image src={matchImage1} />
                        <Typography>BAN</Typography>
                      </div>

                      <div className="text_center">
                        <Typography
                          style={{ fontSize: "14px", fontWeight: "500" }}
                        >
                          {match?.matchDate}
                        </Typography>
                        <Typography
                          variant="h4"
                          style={{ fontSize: "40px", fontWeight: "600" }}
                        >
                          {match?.matchTime}
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", fontWeight: "500" }}
                        >
                          {match?.timeZone}
                        </Typography>
                      </div>

                      <div className="text_center">
                        <Image src={matchImage2} />
                        <Typography>ARG</Typography>
                      </div>
                    </div>

                    <div className="flex content_between item_center">
                      <Typography
                        variant="h5"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        {match?.timeDuration}
                      </Typography>

                      <ComponentButton
                        title="Bet Now"
                        style={{
                          background: "#FFCC00",
                          borderRadius: "8px",
                          color: "#12133D",
                          textTransform: "capitalize",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "21px",
                          padding: "8px 20px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

const UpComingMatchCss = css`
  margin-bottom: 80px;

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

  .match_card_wrapper {
    color: #fff;
    margin-top: 35px;

    .match_card {
      background: #07005b;
      margin: 0px 20px;
      padding: 15px 20px;
      border-radius: 12px;

      .match_title {
        text-align: center;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 12px;
      }
    }
  }
`;

export default UpComingMatch;
