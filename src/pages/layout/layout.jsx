import React from "react";
import { Outlet } from "react-router";
import Header from "../../shared/components/header";
import Footer from "../../shared/components/footer";
const Layout = () => {
  return (
    <div>
  <Header/>
      <Outlet />
   <Footer/>
    </div>
  );
};

export default Layout;
