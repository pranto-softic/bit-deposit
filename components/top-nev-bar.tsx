/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
// import { useEffect } from "react";
// import mq from "../lib/media-query";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const TopNavBar: NextPage = () => (
  //   useEffect(() => {});

  <div css={topNavBarCss}>
    <div className="display-type">
      <img src="./logo.png" alt="project logo" />
      <div className="nav-link-list">
        <a className="nav-link" href="/#">
          {" "}
          Home{" "}
        </a>
        <a className="nav-link" href="/#">
          {" "}
          About Us{" "}
        </a>
        <a className="nav-link" href="/#">
          {" "}
          Support{" "}
        </a>
        <a className="nav-link" href="/#">
          {" "}
          Instruction{" "}
        </a>
      </div>
      <div className="icon-list">
        <EmailIcon />
        <NotificationsIcon style={{ marginLeft: 20 }} />
        <AccountCircleIcon style={{ marginLeft: 20 }} />
      </div>
    </div>
  </div>
);

const topNavBarCss = css`
  height: 70px;
  padding-top: 20px;
  padding-left: 5%;
  padding-right: 5%;
  background-color: #302a78;
  .display-type {
    display: flex;
    color: #ffffff;
    .nav-link-list {
      padding-left: 25%;
      display: flex;
      .nav-link {
        padding-left: 20px;
      }
    }
  }
  .icon-list {
    margin-left: 5%;
  }
`;

export default TopNavBar;
