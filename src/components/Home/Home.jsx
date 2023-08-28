import React from "react";

import Wrapper from "@/components/Wrapper/Wrapper";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import Favourites from "@/components/Favourites/Favourites";

const Home = ({ products, favourites }) => {

  return (
    <>
      <Wrapper>
        <Cart />

        <Favourites favourites={favourites}/>
        <Navbar />
        <Hero products={products}/>
        <Products products={products}/>
        <Cart />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
