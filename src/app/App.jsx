import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import { BrowserRouter, Route, Routes } from "react-router";
import {
  Account,
  Home,
  Layout,
  About,
  Cart,
  Contact,
  GetId,
  Login,
  Products,
  Signup,
  Wishlist,
  Checkout,
} from "./Providers/lazy/lazy.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import Loading from "../shared/ui/custom/loading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<Loading/>}>{<Layout />}</Suspense>}>
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
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
