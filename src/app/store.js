import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../entities/counterSlice'
import  productSlice  from '../entities/Product/productSlice'
import  categorySlice  from '../entities/Category/categorySlice'
import  brandSlice  from '../entities/Brands/brandSlice'
import  cartSlice  from '../entities/Cart/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products:productSlice,
    category:categorySlice,
    brand:brandSlice,
    cart:cartSlice
  },
})