import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialstate = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  totalCost: 0,

  totalItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")).length
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialstate,
  reducers: {
    additem: (state, action) => {
      if (state.items.find((item) => item.name === action.payload.name)) {
        state.totalItems += 1;
        state.totalCost += action.payload.price;
        state.items.map((item) => {
          if (item.name === action.payload.name) {
            item.quantity += 1;
          }
        });
      } else {
        const newItem = {
          id: nanoid(),

          ...action.payload,
        };
        state.items.push(newItem);
        state.totalItems += 1;
        state.totalCost += action.payload.price;
      }
      if (state.items) {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    deleteitem: (state, action) => {
      if (state.totalItems > 0) {
        state.totalItems -= action.payload.quantity;
      }

      state.totalCost -= action.payload.price;
      state.items = state.items.filter((newItem) => {
        return action.payload.id != newItem.id;
      });
    },
    updateItem: (state, action) => {
      state.items.find((item) => {
        if (item.name === action.payload.name) {
          if (action.payload.actionPerformed === "add") {
            item.quantity += 1;
            state.totalItems += 1;
            state.totalCost += action.payload.price;
          } else {
            if (item.quantity > 1) {
              item.quantity -= 1;
              state.totalItems -= 1;
              state.totalCost -= action.payload.price;
            }
          }
        }
      });
    },
    SAVE_SHIPPING_INFO: (state, action) => {
      state = { ...state, shippingInfo: action.payload };
      localStorage.setItem("shippingInfo", JSON.stringify(action.payload));
    },
  },
});

export const { additem, deleteitem, updateItem, SAVE_SHIPPING_INFO } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
