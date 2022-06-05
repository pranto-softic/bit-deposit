/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import Image from "next/image";
import facebook from "../../../assets/icon/facebook_icon.svg";
import instagram from "../../../assets/icon/instagram_icon.svg";
import linkedIn from "../../../assets/icon/linkedIn_icon.svg";
import twitter from "../../../assets/icon/twitter_icon.svg";
import youtube from "../../../assets/icon/youtube_icon.svg";

const CopyRight = () => {
  function socialLink(id: number, icon: string, name: string, link: string) {
    return {
      id,
      icon,
      name,
      link,
    };
  }

  const socialMedia = [
    socialLink(1, facebook, "Facebook", "https://www.facebook.com/"),
    socialLink(2, instagram, "Instagram", "https://www.instagram.com/"),
    socialLink(3, linkedIn, "LinkedIn", "https://www.linkedin.com/"),
    socialLink(4, twitter, "Twitter", "https://twitter.com/"),
    socialLink(5, youtube, "Youtube", "https://www.youtube.com/"),
  ];

  return (
    <div css={copyRightCss}>
      <Divider
        sx={{ margin: "40px 0", border: "1px solid #D9DBE9" }}
        orientation="vertical"
      />

      <div className="flex content_between item_center">
        <div className="copy_right_info">
          <Typography>
            Copyright &copy; 2022 BIT DEPOSIT | All Rights Reserved
          </Typography>
        </div>

        <div className="footer_social_media flex">
          {socialMedia.map((social) => (
            <div
              key={social?.id}
              className="social_icon flex content_center item_center"
            >
              <a href={social?.link} target="_blank" rel="noreferrer">
                <Image src={social?.icon} alt={social?.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const copyRightCss = css`
  color: #fff;

  .social_icon {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background: #302a78;
    mix-blend-mode: normal;
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s leaner;
  }

  .social_icon:hover {
    background-color: #3b358b;
  }
`;

export default CopyRight;
