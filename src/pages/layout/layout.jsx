import React from "react";
import { Outlet } from "react-router";
import Header from "../../shared/components/header";
import Footer from "../../shared/components/footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
