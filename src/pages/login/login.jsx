import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../entities/reducers/counterSlice";
import { jwtDecode } from "jwt-decode";
import { NavLink } from "react-router";
import toast from "react-hot-toast";
const Login = () => {
  const [logname, setlogname] = useState("");
  const [logpassword, setlogpassword] = useState("");
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.counter.loginError);

  const handleLogin = async () => {
    await dispatch(
      login({
        userName: logname,
        password: logpassword,
      })
    );
    toast.success("Successfully logged in")
    window.location.reload()
  };
useEffect(()=>{
  setlogname("");
  setlogpassword("");
},[])
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-[24px] mt-[100px]">
      <h1 className="text-[36px] ">Log in to Exclusive</h1>
      <p className="text-start">Enter your details below</p>
      <div className="flex flex-col gap-[20px] items-start">
        <TextField
          value={logname}
          onChange={(e) => setlogname(e.target.value)}
          label="Name"
          size="small"
          style={{ width: "400px" }}
        />
        <TextField
          value={logpassword}
          onChange={(e) => setlogpassword(e.target.value)}
          label="Password"
          size="small"
          style={{ width: "400px" }}
        />
      </div>

      {loginError && <p className="text-red-600">{loginError}</p>}

      <NavLink to={"/"}>
      <button
        onClick={handleLogin}
        
        className="bg-[#DB4444] text-white w-[400px] py-[16px] cursor-pointer"
        >
        Login
      </button>
        </NavLink>
      
    </div>
  );
};

export default Login;
