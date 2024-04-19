import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../Features/Counter/CartSlice'

export default configureStore({
  reducer: {
    cart : CartReducer
  }
})