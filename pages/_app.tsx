import type { AppProps } from "next/app";
import Head from "next/head";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Bit-Deposit</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
