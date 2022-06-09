/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import headerLogo from "../assets/logo/Header_logo.svg";
import ComponentButton from "./ComponentButton";
import Container from "./container";

const TopNavBar: NextPage = () => (
  //   useEffect(() => {});

  <div css={topNavBarCss}>
    <Container>
      <div className="display_type flex content_between item_center">
        <div className="header_logo">
          <Image src={headerLogo} alt="project logo" />
        </div>

        <div className="nav_link_list flex">
          <Link href="/#">Sports</Link>
          <Link href="/#">Live</Link>
          <Link href="/#">Games</Link>
          <Link href="/#">Support</Link>
          <Link href="/#">Instruction</Link>
          <Link href="/#">Community</Link>

          <div className="icon_list flex content_between item_center">
            <ComponentButton
              title="Login"
              style={{
                background: "#fff",
                borderRadius: "4px",
                color: "#352F7F",
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                padding: "2px 15px",
                marginRight: "20px",
              }}
            />

            <ComponentButton
              title="Sign Up"
              style={{
                background: "#FFCC00",
                borderRadius: "4px",
                color: "#352F7F",
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "14px",
                padding: "2px 15px",
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  </div>
);

const topNavBarCss = css`
  height: 70px;
  padding-top: 20px;
  background-color: #262260;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  .display_type {
    display: flex;
    color: #ffffff;

    .header_logo {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .nav_link_list {
      padding-left: 25%;

      a {
        margin-right: 30px;
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
`;

export default TopNavBar;
