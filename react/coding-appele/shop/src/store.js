import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

const stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 1 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const 번호 = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[번호].count++;
    },
    addCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      const 번호 = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state.splice(번호, 1);
    },
    removeCount(state, action) {
      const 번호 = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[번호].count--;
    },
  },
});
export const { addCount, addCart, removeCount, removeCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
