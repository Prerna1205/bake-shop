import { createSlice } from "@reduxjs/toolkit";
import image1 from "../../img/pancake.jpg";
import image2 from "../../img/donuts.jpg";
import image3 from "../../img/cookies.jpg";
import image4 from "../../img/muffins.jpg";
const initialstate = {
  allDesserts: [
    {
      id: 1,
      name: "Pancake",
      img: image1,
      desc: "Pancakes are fluffy and delecious.",
      price: "Rs100",
    },
    {
      id: 2,
      name: "Donuts",
      img: image2,
      desc: "Pancakes are fluffy and delecious.",
      price: "Rs 50",
    },
    {
      id: 3,
      name: "Cookies",
      img: image3,
      desc: "Cookies are mouth dissolving",
      price: "Rs 120",
    },
    {
      id: 4,
      name: "Muffin",
      img: image4,
      desc: "Muffin are fluffy and delecious.",
      price: "Rs 50",
    },
  ],
  bestDesserts: [
    {
      id: 1,
      name: "Pancake",
      img: image1,
      desc: "Pancakes are fluffy and delecious.",
      price: "Rs100",
    },
    {
      id: 2,
      name: "Donuts",
      img: image2,
      desc: "Pancakes are fluffy and delecious.",
      price: "Rs 50",
    },
  ],
  filter: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialstate,
  reducers: {
    setFilter: (state, action) => {},
  },
});
