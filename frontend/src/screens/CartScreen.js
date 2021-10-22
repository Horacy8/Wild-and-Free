import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import "./CartScreen.css";

function CartScreen(props) {
  const productId = props.match.params.id;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);
  return (
    <div className="cart-screen">
      <h2 className="cart-screen__title">Koszyk</h2>
      <p>ADD TO CART: ProductId: {productId}</p>
    </div>
  );
}

export default CartScreen;
