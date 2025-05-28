import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../shared/ConfigJs/api";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
const savedToken = localStorage.getItem("Token");

export const getCart = createAsyncThunk("cart/getCart", async () => {
  const token = localStorage.getItem("Token");
  if (!token) {
    return thunkAPI.rejectWithValue("No token provided");
  }
  try {
    const { data } = await axios.get(
      `https://store-api.softclub.tj/Cart/get-products-from-cart`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data.data[0];
  } catch (error) {
    console.error(error);
  }
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("Token");
      const { data } = await axios.post(
        `${api}/Cart/add-product-to-cart?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(getCart());
      toast.success("Successfully added to cart");
      return data.data;
    } catch (error) {
      console.error(error);

      toast.error("Already have this product");
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("Token");
      const { data } = await axios.delete(
        `${api}/Cart/delete-product-from-cart?id=${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(getCart());
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { dispatch }) => {
    try {
      const token = localStorage.getItem("Token");
      const { data } = await axios.delete(`${api}/Cart/clear-cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getCart());
      toast.success("All product removed from cart");
      return data.data[0].productsInCart;
    } catch (error) {
      console.error(error);
    }
  }
);
export const increaseCart = createAsyncThunk(
  "cart/increaseCart",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("Token");
      const { data } = await axios.put(
        `${api}/Cart/increase-product-in-cart?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(getCart());
      return data.data[0].productsInCart;
    } catch (error) {
      console.error(error);
    }
  }
);
export const reduceCart = createAsyncThunk(
  "cart/reduceCart",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("Token");
      const { data } = await axios.put(
        `${api}/Cart/reduce-product-in-cart?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(getCart());
      return data.data[0].productsInCart;
    } catch (error) {
      console.error(error);
    }
  }
);

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartData:[],
        totalProduct:0,
        totalPrice: "",
        discountPrice: "",
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCart.fulfilled, (state, action) => {
            state.cartData = action.payload.productsInCart;
            state.totalProduct = action.payload.totalProducts;
            state.discountPrice = action.payload.totalDiscountPrice;
            state.totalPrice = action.payload.totalPrice;
    
          })
          .addCase(addToCart.fulfilled, (state, action) => {
            state.cartData.push(action.payload);
          })
          .addCase(deleteFromCart.fulfilled, (state, action) => {
            state.cartData = state.cartData.filter((el) => el.id != action.payload);
          })
          .addCase(clearCart.fulfilled, (state, action) => {
            state.cartData = action.payload;
          })
          .addCase(increaseCart.fulfilled, (state, action) => {
            state.cartData = action.payload;
          })
    }
})

export default cartSlice.reducer