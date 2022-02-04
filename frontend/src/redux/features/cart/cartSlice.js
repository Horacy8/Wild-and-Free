import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const productExist = state.cartItems.find(
        (item) => item._id === product._id && item.size === product.size
      );
      if (productExist) {
        // console.log(product);
        state.cartItems = state.cartItems.map((item) =>
          item === productExist ? product : item
        );
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        state.cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) =>
          !(cartItem._id === action.payload._id && cartItem.size === action.payload.size)
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("shippingAddress", JSON.stringify(state.shippingAddress));
    },
  },
});

export const { addProductToCart, removeProductFromCart, saveShippingAddress } =
  cartSlice.actions;
export default cartSlice.reducer;
