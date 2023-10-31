import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialstate = {
  items: [],
  totalItems: 0,
  totalCost: 0,
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
    },
    deleteitem: (state, action) => {
      state.totalItems -= action.payload.quantity;
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
            if(item.quantity>1)
            {
              item.quantity -= 1;
              state.totalItems -= 1;
              state.totalCost -= action.payload.price;
            }
           
          }
        }
      });
    },
  },
});

export const { additem, deleteitem, updateItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
