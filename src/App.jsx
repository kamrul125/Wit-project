import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; // Importing Router and Routes from react-router-dom

// Adding pages for routing
import HomePage from "./Pages/HomePage"; // You can create more pages for routing
import ContactPage from "./Pages/ContactPage";
import RootLayout from "./Components/RootLayout";
import ShopPage from "./Pages/ShopPage";
import BlogPage from './Pages/BlogPage';
import ProductPage from "./Pages/ProductPage";

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
         

      </Route>
    )
  );

  return (
    <RouterProvider router={myRouter} /> // Using RouterProvider with myRouter
  );
}

export default App;
