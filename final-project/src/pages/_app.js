// _app.js
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
