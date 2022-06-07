/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Button, Input, Typography } from "@mui/material";
import { NextPage } from "next";
import Container from "../container";

const NewsLetter: NextPage = () => (
  <div css={newsLetterCss}>
    <Container>
      <div className="sign_up_area flex content_between item_center">
        <Typography variant="h4">Newsletter Sign Up</Typography>

        <div
          className="flex content_center item_center"
          style={{ width: "60%" }}
        >
          <Input
            className="input_field"
            disableUnderline
            fullWidth
            placeholder="Enter your email here..."
          />
          <Button className="submit_btn">
            <TelegramIcon />
          </Button>
        </div>
      </div>
    </Container>
  </div>
);

const newsLetterCss = css`
  background-image: url(https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg);
  background-repeat: no-repeat;
  padding: 80px 0;
  margin-bottom: 80px;

  .sign_up_area {
    width: 70%;
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.9;
    border-radius: 7px;
    padding: 15px;
    margin: 0 auto;

    h4 {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.02em;
      color: #302a78;
    }

    .input_field {
      width: 100%;
      padding: 6px 75px 6px 21px;
      background: #ffcc00;
      border-radius: 6px;
    }

    .submit_btn {
      position: absolute;
      background: #302a78;
      color: #fff;
      border-radius: 6px;
      padding: 10px 15px;
      right: 19.3%;
    }
  }
`;

export default NewsLetter;
