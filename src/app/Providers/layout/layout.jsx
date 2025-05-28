import React from "react";
import { Outlet } from "react-router";
import Header from "../../../shared/ui/Widgets/header";
import Footer from "../../../shared/ui/Widgets/footer";
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
