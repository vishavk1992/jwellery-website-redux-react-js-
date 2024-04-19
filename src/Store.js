import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Component/Features/Cart/CartSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});