import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../shared/ConfigJs/api"
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
const savedToken = localStorage.getItem("Token");


export const getByid = createAsyncThunk("counter/getById", async (id) => {
  try {
    let { data } = await axios.get(`${api}/Product/get-product-by-id?id=${id}`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const GetMinPrice = createAsyncThunk(
  "counter/GetMinPrice",
  async (num) => {
    try {
      let { data } = await axios.get(
        `${api}/Product/get-products?MinPrice=/${num}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getProductFilter = createAsyncThunk(
  "counter/getProductFilter",
  async (brandID = "", categoryID = "") => {
    console.log(categoryID+"s",brandID+"f");
    
    try {
      let { data } = await axios.get(
        `${api}/Product/get-products?BrandId=${brandID}&CategoryId=${categoryID}`
      );
      return data.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);

export const GetUserId = createAsyncThunk("counter/GetUSerId", async (id) => {
  const token = localStorage.getItem("Token");

  try {
    let { data } = await axios.get(`${api}/UserProfile/get-user-profile-by-id?id=${id}`,{
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const login = createAsyncThunk(
  "counter/login",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(`${api}/Account/login`, user);
      localStorage.setItem("Token", data.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Invalid credentials");
    }
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    info: {},
    minprice: [],
    token: "",
    loginError: null,
    user: savedToken ? jwtDecode(savedToken) : {},
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],

  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("Token");
    },
    addToWishlist: (state, action) => {
      let wish = state.wishlist.find((item) => item.id === action.payload.id);
      if (wish) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishlist.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(GetUserId.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      .addCase(GetMinPrice.fulfilled, (state, action) => {
        state.minprice = action.payload;
      })

      .addCase(getByid.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        const token = action.payload;
        const decoded = jwtDecode(token);

        state.token = token;
        state.user = decoded; 
        state.loginError = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = action.payload; // "Invalid credentials"
      })
     
    
     
  },
});

export default counterSlice.reducer;
export const { logout, addToWishlist, removeFromWishlist } =
  counterSlice.actions;
