import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import  cartSlice  from './cardSlice';
export const store = configureStore({
  reducer: {
    products: productReducer,
    card : cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;