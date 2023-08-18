import React from "react";
import "../styles/globals.scss";

const HomePage = () => {
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>Iola</title>
        <meta name="description" content="Your page description." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/" />

        {/* Open Graph and Twitter Cards */}
        <meta property="og:title" content="Your Open Graph Title" />
        <meta
          property="og:description"
          content="Your Open Graph Description."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:creator" content="@yourtwitterhandle" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* CSS Stylesheets */}
        <link rel="stylesheet" href="/styles.css" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="your, keywords, here" />
        <meta name="author" content="Your Name" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
};

export default HomePage;
