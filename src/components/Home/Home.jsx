import React, { useEffect } from "react";

import Wrapper from "@/components/Wrapper/Wrapper";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import Favourites from "@/components/Favourites/Favourites";
import FooterEnd from "../FooterEnd/FooterEnd";

import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userActions } from "@/store/user-slice";

const Home = ({ products, favourites }) => {
  const dispatch = useDispatch();
  const createNewUserId = () => {
    const newUserId = uuidv4();
    Cookies.set("newUserId", newUserId, { expires: 60 / 1440 });
    return newUserId;
  };

  useEffect(() => {
    const userId = Cookies.get("newUserId");

    if (!userId) {
      const newUserId = createNewUserId();

      dispatch(userActions.addUserId(newUserId));
      console.log(newUserId);
    } else {
      dispatch(userActions.addUserId(userId));
      console.log(userId);
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Cart />

        <Favourites favourites={favourites} />
        <Navbar />
        <Hero products={products} />
        <Products products={products} />
        <Cart />
        <Footer />
        <FooterEnd />
      </Wrapper>
    </>
  );
};

export default Home;
