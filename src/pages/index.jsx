import React from "react";
import "../styles/globals.scss";
import Head from "next/head";
import Wrapper from "@/components/Wrapper/Wrapper";
import Navbar from "@/components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Irving & Otto</title>
        <meta
          name="description"
          content="Explore a world of timeless elegance and curated charm at Irving & Otto. Discover a collection of unique antique home decor pieces, meticulously selected to adorn your living spaces in an eclectic style that exudes sophistication and character."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://irvingandotto.netlify.app/" />

        {/* Open Graph and Twitter Cards */}
        <meta
          property="og:title"
          content="Irving & Otto: Antique Home Decor in Eclectic Elegance"
        />
        <meta
          property="og:description"
          content="Indulge in the opulence of Irving & Otto, where the allure of antique home decor meets eclectic sophistication. Immerse yourself in a collection of unique pieces that capture the essence of timeless charm."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta property="og:url" content="https://irvingandotto.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@irvingandotto" />
        <meta name="twitter:creator" content="@irvingandotto" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="antique home decor, eclectic style, luxury decor"
        />
        <meta name="author" content="Irving & Otto" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Wrapper>
        <Navbar/>
      </Wrapper>
    </>
  );
};

export default HomePage;
