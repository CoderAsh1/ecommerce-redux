import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let prodd = state.find((item) => item.id === action.payload.id);
      if (prodd) {
        prodd.qty += action.payload.qty;
      } else state.push(action.payload);
    },
    incrementQty: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) item.qty += 1;
      });
    },
    decrementQty: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) item.qty -= 1;
      });
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, incrementQty, decrementQty, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
