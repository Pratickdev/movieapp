import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
import LoginSlice from './LoginSlice'

export const Store = configureStore({
  reducer: {
    Cart: CartSlice,
    Login:LoginSlice
  },
})