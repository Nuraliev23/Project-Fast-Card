import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let api = import.meta.env.VITE_API_URL;
import { jwtDecode } from "jwt-decode";
const savedToken = localStorage.getItem("Token");

export const get = createAsyncThunk("counter/get", async () => {
  try {
    let { data } = await axios.get(`${api}/Product/get-products`);
    return data.data.products;
  } catch (error) {
    console.error(error);
  }
});

export const getByid = createAsyncThunk("counter/getById", async (id) => {
  try {
    let { data } = await axios.get(`${api}/Product/get-product-by-id?id=${id}`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const get2 = createAsyncThunk("counter/get2", async () => {
  try {
    let { data } = await axios.get(`${api}/Category/get-categories`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const GetCart = createAsyncThunk("counter/GetCart", async () => {
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
    return data.data[0].productsInCart;
  } catch (error) {
    console.error(error);
  }
});

export const addToCart = createAsyncThunk(
  "counter/addToCart",
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
      dispatch(GetCart());
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const DeleteFromCart = createAsyncThunk(
  "counter/DeleteFromCart",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("Token");
      const { data } = await axios.delete(
        `${api}/Cart/delete-product-from-cart?id=${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(GetCart());
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const ClearCart = createAsyncThunk("counter/ClearCart", async () => {
  try {
    const token = localStorage.getItem("Token");
    const { data } = await axios.delete(`${api}/Cart/clear-cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  } catch (error) {
    console.error(error);
  }
});
export const IncreaseCart = createAsyncThunk(
  "counter/IncreaseCart",
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
      dispatch(GetCart());
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const ReduceCart = createAsyncThunk(
  "counter/ReduceCart",
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
      dispatch(GetCart());
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const GetTotalPrice = createAsyncThunk(
  "counter/GetTotalPrice",
  async () => {
    try {
      const token = localStorage.getItem("Token");
      const { data } = await axios.get(
        `https://store-api.softclub.tj/Cart/get-products-from-cart`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data.data[0].totalPrice;
    } catch (error) {
      console.error(error);
    }
  }
);
export const GetDiscountPrice = createAsyncThunk(
  "counter/GetDiscountPrice",
  async () => {
    try {
      const token = localStorage.getItem("Token");
      const { data } = await axios.get(
        `https://store-api.softclub.tj/Cart/get-products-from-cart`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data.data[0].totalDiscountPrice;
    } catch (error) {
      console.error(error);
    }
  }
);

export const GetBrands = createAsyncThunk("counter/GetBrands", async () => {
  try {
    let { data } = await axios.get(`${api}/Brand/get-brands`);
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
    data: [],
    data2: [],
    info: {},
    cart: [],
    brands: [],
    minprice: [],
    token: "",
    totalprice: "",
    discountprice: "",
    loginError: null,
    user: savedToken ? jwtDecode(savedToken) : null,
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    filterPoducts: [],
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
      .addCase(get.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getProductFilter.fulfilled, (state, action) => {
        state.filterPoducts = action.payload;
      })
      .addCase(GetBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(GetMinPrice.fulfilled, (state, action) => {
        state.minprice = action.payload;
      })
      .addCase(get2.fulfilled, (state, action) => {
        state.data2 = action.payload;
      })
      .addCase(getByid.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        const token = action.payload;
        const decoded = jwtDecode(token);

        state.token = token;
        state.user = decoded; // теперь ты сохраняешь юзера
        state.loginError = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = action.payload; // "Invalid credentials"
      })
      .addCase(GetCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart.push(action.payload);
      })
      .addCase(DeleteFromCart.fulfilled, (state, action) => {
        state.cart = state.cart.filter((el) => el.id != action.payload);
      })
      .addCase(ClearCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(IncreaseCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(GetTotalPrice.fulfilled, (state, action) => {
        state.totalprice = action.payload;
      })
      .addCase(GetDiscountPrice.fulfilled, (state, action) => {
        state.discountprice = action.payload;
      });
  },
});

export default counterSlice.reducer;
export const { logout, addToWishlist, removeFromWishlist } =
  counterSlice.actions;
