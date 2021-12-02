import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
// import "jquery";
// import "bootstrap/dist/js/bootstrap";

import type { AppProps } from "next/app";
import Script from "next/script";

import Header from "../components/master/header/header";
import Footer from "../components/master/footer/footer";
import { useEffect } from "react";
import { Modales, modales } from "../components/common/modales";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("jquery").then((jquery) => {
      console.log("cargo jquery", jquery);
    });
    import("bootstrap").then((bootstrap) => {
      console.log("cargo bootstrap", bootstrap);
    });
  }, []);
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <modales.Container />
    </div>
  );
}

export default MyApp;
