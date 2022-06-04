/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Container = (props: any) => {
  const { children } = props;
  return <div css={ContainerCss}>{children}</div>;
};

const ContainerCss = css`
  margin-left: 5%;
  margin-right: 5%;
`;

export default Container;
