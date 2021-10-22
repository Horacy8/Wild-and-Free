import React from "react";
import "./CartScreen.css";

function CartScreen(props) {
  const productId = props.match.params.id;
  return (
    <div className="cart-screen">
      <h2 className="cart-screen__title">Koszyk</h2>
      <p>ADD TO CART: ProductId: {productId}</p>
    </div>
  );
}

export default CartScreen;
