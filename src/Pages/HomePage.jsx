// src/Pages/HomePage.jsx
import React from "react";
import Hero from "../Components/Hero"; // Importing Hero component
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import BlogSection from "../Components/BlogSection";


const HomePage = () => {
  return (
    <div>
     
      <Hero />
      < Featured/>
       < BlogSection/>
   
     

    </div>
  );
};

export default HomePage;
