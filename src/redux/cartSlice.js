import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialstate = {
  items: [],
  totalItems: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialstate,
  reducers: {
    additem: (state, action) => {
      const newItem = {
        id: nanoid(),
        ...action.payload,
      };
      state.items.push(newItem);
      //state.totalItems += action.payload.quantity;
    },
  },
});

export const { additem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
