/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import appleIcon from "../../../assets/icon/Apple_app_icon.svg";
import chatIcon from "../../../assets/icon/chat_icon.svg";
import androidIcon from "../../../assets/icon/Google_app_icon.svg";
import mailIcon from "../../../assets/icon/mail_icon.svg";
import phoneIcon from "../../../assets/icon/phone_icon.svg";
import footerLogo from "../../../assets/logo/Footer_logo.svg";
import Container from "../../container";
import CopyRight from "./CopyRight";

const Footer: NextPage = () => (
  <div css={footerCss}>
    <Container>
      <div className="footer_header flex content_between item_center">
        <div className="footer_logo">
          <Image src={footerLogo} />
          <Typography>Your trusted betting company</Typography>
        </div>

        <div className="mobile_application">
          <a
            href="https://www.apple.com/app-store/"
            style={{ marginRight: "15px" }}
          >
            <Image src={appleIcon} />
          </a>

          <a href="https://play.google.com/">
            <Image src={androidIcon} />
          </a>
        </div>
      </div>
    </Container>

    <Divider
      sx={{ margin: "40px 0", border: "1px solid #D9DBE9" }}
      orientation="vertical"
    />

    <Container>
      <div className="footer_grid_wrapper flex content_between">
        <div className="footer_single_grid">
          <Typography className="footer_title" variant="h5">
            Company
          </Typography>

          <Typography>
            <Link href="/">About Us</Link>
          </Typography>
          <Typography>
            <Link href="/">Terms & Conditions</Link>
          </Typography>
          <Typography>
            <Link href="/">Privacy Policy</Link>
          </Typography>
          <Typography>
            <Link href="/">Blog</Link>
          </Typography>
        </div>

        <div className="footer_single_grid">
          <Typography className="footer_title" variant="h5">
            Information
          </Typography>

          <Typography>
            <Link href="/">Social Media</Link>
          </Typography>
          <Typography>
            <Link href="/">Payments</Link>
          </Typography>
          <Typography>
            <Link href="/">Partners</Link>
          </Typography>
          <Typography>
            <Link href="/">Promotions</Link>
          </Typography>
        </div>

        <div className="footer_single_grid">
          <Typography className="footer_title" variant="h5">
            Partnership
          </Typography>

          <Typography>
            <Link href="/">B2B Program</Link>
          </Typography>
          <Typography>
            <Link href="/">Become an Affiliates</Link>
          </Typography>
          <Typography>
            <Link href="/">Become an Agent</Link>
          </Typography>
        </div>

        <div className="footer_single_grid">
          <Typography className="footer_title" variant="h5">
            Betting
          </Typography>

          <Typography>
            <Link href="/">Games</Link>
          </Typography>
          <Typography>
            <Link href="/">Live Games</Link>
          </Typography>
          <Typography>
            <Link href="/">Casino</Link>
          </Typography>
          <Typography>
            <Link href="/">Lottery</Link>
          </Typography>
        </div>

        <div className="footer_single_grid">
          <Typography className="flex item_center">
            <span className="icon">
              <Image src={chatIcon} height={25} width={25} />{" "}
            </span>
            Start a Live Chat
          </Typography>

          <Typography className="flex item_center">
            <span className="icon">
              <Image src={phoneIcon} height={25} width={25} />{" "}
            </span>
            +880 123456789
          </Typography>

          <Typography className="flex item_center ">
            <span className="icon">
              <Image src={mailIcon} height={25} width={25} />{" "}
            </span>
            yourmail@gmail.com
          </Typography>
        </div>
      </div>

      <CopyRight />
    </Container>
  </div>
);

const footerCss = css`
  background: #07005b;
  padding: 48px 0;
  .footer_header {
    .footer_logo {
      p {
        color: #d0d0d0;
        margin-top: 10px;
      }
    }
  }

  .footer_grid_wrapper {
    color: #fff;
    flex-wrap: wrap;

    .footer_single_grid {
      p {
        line-height: 30px;
      }
    }

    .footer_title {
      color: #ffcc00;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .icon {
      padding-right: 10px;
    }
  }
`;

export default Footer;
