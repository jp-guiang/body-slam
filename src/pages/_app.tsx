// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { NavBar } from "../components/NavBar";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
          <title>Body Slam</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />;
    </>
  )
};

export default MyApp;
