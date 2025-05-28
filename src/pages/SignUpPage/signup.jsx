import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../../shared/ConfigJs/api"


const Signup = () => {
  const [addname, setaddname] = useState("");
  const [addphone, setaddphone] = useState("");
  const [addemail, setaddemail] = useState("");
  const [addpassword, setaddpassword] = useState("");
  const [addconpassword, setaddconpassword] = useState("");
  const [error,seterror] = useState('')
  let userinf = {
    userName:addname,
    phoneNumber:addphone,
    email:addemail,
    password:addpassword,
    confirmPassword:addconpassword
  }

  async function addUser() {
    try {
      await axios.post(`${api}/Account/register`,userinf)
      seterror("success")
      toast.success('Your account Successfully Created')
     
    } catch (error) {
      seterror("error")
      toast.error("This account is already registered")
      console.error(error);
    }
    setaddname('')
    setaddphone('')
    setaddemail('')
    setaddpassword('')
    setaddconpassword('')
  }

  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-[24px] mt-[100px] text-start">
        <h1 className="text-[36px] ">Create an account</h1>
        <p className="text-start">Enter your details below</p>
        <div className="flex flex-col gap-[20px] items-start">
          <div>
            <TextField
              value={addname}
              onChange={(e) => setaddname(e.target.value)}
              label="Name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              style={{ width: "400px" }}
            />
          </div>
          <div>
            <TextField
              value={addphone}
              onChange={(e) => setaddphone(e.target.value)}
              label="Phone Number"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              style={{ width: "400px" }}
            />
          </div>
          <div>
            <TextField
              value={addemail}
              onChange={(e) => setaddemail(e.target.value)}
              label="Email or phone number"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              style={{ width: "400px" }}
            />
          </div>
          <div>
            <div>
              <TextField
                value={addpassword}
                onChange={(e) => setaddpassword(e.target.value)}
                label="Password"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                style={{ width: "400px" }}
              />
            </div>
          </div>
          <div>
            <div>
              <TextField
                value={addconpassword}
                onChange={(e) => setaddconpassword(e.target.value)}
                label="Confirm Password"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                style={{ width: "400px" }}
              />
            </div>
          </div>
        </div>
        <button onClick={addUser} className="bg-[#DB4444] text-white w-[400px] py-[16px] cursor-pointer">
          Create Account
        </button>
        
{error && <p className="text-red-500">{error}</p>}
        <input type="text" placeholder="" />
        <div className="flex justify-between items-center w-[400px]">
          <p>Already have account?</p>
          <p className="bg-[#DB4444] text-white p-[5px_15px]">
            <NavLink to="/login">Log In</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
