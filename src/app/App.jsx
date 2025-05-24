import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import Layout from "../pages/layout/layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home/home.jsx";
import About from "../pages/about/about.jsx";
import { Account } from "../pages/lazy/lazy.jsx";
import Cart from "../pages/cart/cart.jsx";
import Contact from "../pages/contact/contact.jsx";
import GetId from "../pages/getByid/getId.jsx";
import Login from "../pages/login/login.jsx";
import Products from "../pages/products/products.jsx";
import Signup from "../pages/signup/signup.jsx";
import Wishlist from "../pages/wishlist/wishlist.jsx";
import { store } from "../entities/store/store.js";
import { Provider } from "react-redux";
import Checkout from "../pages/checkout/checkout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="account" element={<Account />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="getId/:id" element={<GetId />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Products />} />
            <Route path="signup" element={<Signup />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="checkout" element={<Checkout/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
