import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../shared/ConfigJs/api"

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      let { data } = await axios.get(`${api}/Product/get-products`);
      return data.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    getData: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.getData = action.payload;
    });
  },
});
export default productSlice.reducer;
