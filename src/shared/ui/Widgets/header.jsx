import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "@images/Group 1116606595.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Dashboard from "../Custom/dashboard";
import { Badge, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Accauntdashboard from "../custom/accauntdashboard";
import { getCart } from "../../../entities/Cart/cartSlice";

const Header = () => {
  let { wishlist } = useSelector((store) => store.counter);
  // console.log(wishlist);
  let { totalProduct } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div>
      <header className=" border-b-[1px] border-b-[#d6d4d4] p-[17px_0px]">
        <nav className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div className="flex md:hidden items-center">
            <Dashboard />
            <h1 className="font-bold text-[25px]">Exclusive</h1>
          </div>
          <img src={logo} alt="" className="hidden md:inline" />
          <ul className="md:flex gap-[32px] hidden ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#DB4444] font-bold border-b-[#DB4444] border-b-[2px]"
                    : "text-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#DB4444] font-bold border-b-[#DB4444] border-b-[2px]"
                    : "text-gray-700"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#DB4444] font-bold border-b-[#DB4444] border-b-[2px]"
                    : "text-gray-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="signup"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#DB4444] font-bold border-b-[#DB4444] border-b-[2px]"
                    : "text-gray-700"
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-[24px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] p-[3px_10px] rounded-[5px] w-[240px] hidden md:inline"
            />
            <div className="hidden md:inline">
              <NavLink to="wishlist">
                <IconButton color="inherit">
                  <Badge badgeContent={wishlist.length} color="error">
                    <FavoriteBorderIcon className="bg-white rounded-full p-[3px]" />
                  </Badge>
                </IconButton>
              </NavLink>
            </div>
            <div>
              <NavLink to="cart">
                <IconButton color="inherit">
                  <Badge badgeContent={totalProduct} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </NavLink>
            </div>
            <Accauntdashboard />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
