import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  products: [],
  filter: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialstate,
  reducers: {
    addtoList: (state, action) => {
      return {
        ...state,
        products: action.products,
      };
    },
    setFilter: (state, action) => {
    
      return { ...state, filter: action.payload };
    },

    clearFilter: (state, action) => {
      return { ...state, filter: null };
    },
  },
});
export const { addtoList,setFilter,clearFilter } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
