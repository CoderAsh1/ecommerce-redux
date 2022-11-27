import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productSlice";
import { cartSlice } from "./cartSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
