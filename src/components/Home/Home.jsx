import React, { useState } from "react";

import Wrapper from "@/components/Wrapper/Wrapper";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import Favourites from "@/components/Favourites/Favourites";


const Home = ({ products }) => {
  const [cartOpened, setCartOpened] = useState(false);
  const [favOpened, setFavOpened] = useState(false);

  return (
    <>
      <Wrapper>
        <Cart opened={cartOpened} onClose={() => setCartOpened(false)} />

        <Favourites opened={favOpened} onClose={() => setFavOpened(false)} />
        <Navbar
          onClickCart={() => setCartOpened(true)}
          onClickFav={() => setFavOpened(true)}
        />
        <Hero />
        <Products products={products} />
        <Cart />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
