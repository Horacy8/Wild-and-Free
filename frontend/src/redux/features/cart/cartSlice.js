import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    shippingAddress: {},
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      if (
        state.cartItems.find(
          (item) => item._id === product._id && item.size === product.size
        )
      ) {
        console.log("Produkt jest juz dodany");
        return;
      } else {
        state.cartItems.push(product);
        console.log("dodaje produkt");
      }
    },
    removeProductFromCart: (state, action) => {
      console.log(action.payload);
      state.cartItems = state.cartItems.filter(
        (cartItem) =>
          !(cartItem._id === action.payload._id && cartItem.size === action.payload.size)
      );
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

export const { addProductToCart, removeProductFromCart, saveShippingAddress } =
  cartSlice.actions;
export default cartSlice.reducer;
