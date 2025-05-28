import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../shared/ConfigJs/api"

export const getBrands = createAsyncThunk("brand/getBrands", async () => {
  try {
    let { data } = await axios.get(`${api}/Brand/get-brands`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const brandSlice = createSlice({
  name: "brand",
  initialState: {
    brands: [],
  },

  extraReducers: (builder) => {
    builder
    .addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
  },
});

export default brandSlice.reducer
