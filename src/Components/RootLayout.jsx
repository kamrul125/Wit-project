import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />  {/* এখানে চাইল্ড রাউট পেজ দেখাবে */}
      <Footer />
    </>
  );
};

export default RootLayout;
