import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reduces/cartSlice'
import counterSlices from './reduces/counterSlices'
// import counterSlices from './reduces/counterSlices'

export const store = configureStore({
  reducer: {
    // counter : counterSlices
    cart:cartSlice
  },
})