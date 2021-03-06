import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

import type { AppProps } from "next/app";

import MainLayout from "@components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
