import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state, action) {
      state.age += action.payload;
    },
  },
});
export const { changeName } = user.actions;

export default user;
