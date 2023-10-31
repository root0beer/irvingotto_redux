import React, { useEffect, useState } from "react";

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
import { cartActions } from "@/store/cart-slice";
import { favouritesActions } from "@/store/favourites-slice";

const Home = ({ products, favourites }) => {
  const dispatch = useDispatch();
  const createNewUserId = () => {
    const newUserId = uuidv4();
    Cookies.set("userId", newUserId, { expires: 1 / 1440 });
    console.log(newUserId, "created user id");
    return newUserId;
  };

  const checkUserIdValidity = () => {
    const existingUserId = Cookies.get("userId");
    if (!existingUserId) {
      const newUserId = createNewUserId();
      dispatch(favouritesActions.addUserId(newUserId));
      dispatch(userActions.addUserId(newUserId));
      dispatch(cartActions.addUserId(newUserId));
      console.log(newUserId, "new User Id");
    } else {
      dispatch(favouritesActions.addUserId(existingUserId));
      dispatch(userActions.addUserId(existingUserId));
      dispatch(cartActions.addUserId(existingUserId));
      console.log(existingUserId, "user id EXISTED");
    }
  };

  checkUserIdValidity();


  // useEffect(() => {
  //   const userId = Cookies.get("newUserId");

  //   if (!userId) {
  //     const newUserId = createNewUserId();

  //     dispatch(userActions.addUserId(newUserId));
  //     dispatch(cartActions.addUserId(newUserId));
  //     console.log(newUserId);
  //   } else {
  //     const userId = createNewUserId();
  //     dispatch(userActions.addUserId(userId));
  //     dispatch(cartActions.addUserId(userId));
  //     console.log(userId);
  //   }
  // }, []);

  return (
    <>
      <Wrapper>
        <Cart />
        <Favourites favourites={favourites} />
        <Navbar  />
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
