import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      state.cartItems.push(product);
    },
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
