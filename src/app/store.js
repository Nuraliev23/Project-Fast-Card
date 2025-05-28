import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../entities/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
    
  },
})