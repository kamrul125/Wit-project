import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; // Importing Router and Routes from react-router-dom

// Adding pages for routing
import HomePage from "./Pages/HomePage"; // You can create more pages for routing
import ContactPage from "./Pages/ContactPage";
import RootLayout from "./Components/RootLayout";
import ShopPage from "./Pages/ShopPage";
import BlogPage from './Pages/BlogPage';
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import AccountPage from "./Pages/AccountPage";
import NfPage from "./Pages/NfPage";
import OrderPage from "./Pages/OrderPage";


function App() {
  // Defining router configuration
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={ < RootLayout/> } >
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/ProductPage" element={< ProductPage />} />
        <Route path="/AboutPage" element={< AboutPage />} />
        <Route path="/AccountPage" element={< AccountPage />} />
        <Route path="/AccountPage" element={< AccountPage />} />
        <Route path="/NfPage" element={< NfPage />} />
        <Route path="/OrderPage" element={< OrderPage />} />

      </Route>
    )
  );

  return (
    <RouterProvider router={myRouter} /> // Using RouterProvider with myRouter
  );
}

export default App;
