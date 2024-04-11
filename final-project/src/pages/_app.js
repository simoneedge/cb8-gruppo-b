import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { SessionProvider } from "next-auth/react";
import { createTheme, MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}
