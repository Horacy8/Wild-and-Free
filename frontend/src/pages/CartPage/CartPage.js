import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as BasketIcon } from "../../assets/icon/shoppingBag.svg";
import "./CartPage.css";
import { removeProductFromCart } from "../../redux/features/cart/cartSlice";
// TODO przechowywanie produktow w koszyku nawet po odswiezeniu strony
function CartPage(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const deliveryCost = 14;

  const dispatch = useDispatch();
  // TODO dodac mnozenie przez ilosc sztuk "qty"
  const priceForAllProducts = cartItems.reduce((a, c) => a + c.price, 0);

  const removeFromCart = (_id, size) => {
    dispatch(removeProductFromCart({ _id, size }));
  };

  const checkoutHandler = () => {
    props.history.push(`/dane-adresowe`);
  };

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <div className="cart-page__empty">
          <BasketIcon />
          <h3 className="cart-page__empty-title">Twój koszyk jest pusty</h3>
          <p className="cart-page__empty-text">
            Dodaj produkty do koszyka, aby złożyć zamówienie
          </p>
          <Link to="/kolekcja/cala">
            <button className="btn">Zobacz kolekcję</button>
          </Link>
        </div>
      ) : (
        <>
          <h3 className="cart-page__title">Koszyk</h3>
          <div className="cart-page__columns">
            <div className="cart-page__col1">
              <ul className="cart-page__products">
                {cartItems.map((item) => (
                  <li key={item._id} className="cart-page__product">
                    <div className="cart-page__image">
                      <Link to={`/produkt/${item._id}`}>
                        <img src={item.image} alt={item.name} />
                      </Link>
                    </div>
                    <div className="cart-page__description">
                      <Link to={`/produkt/${item._id}`}>
                        <h2 className="cart-page__name">{item.name}</h2>
                      </Link>
                      <h5 className="cart-page__size">{`Rozmiar: ${item.size}`}</h5>
                    </div>
                    <div className="cart-page__quantity">
                      {/* TODO mozliwosc wyboru ilosci sztuk */}
                      {/* <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, Number(e.target.value)))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select> */}
                    </div>
                    <div
                      className="cart-page__icon"
                      onClick={() => removeFromCart(item._id, item.size)}
                    >
                      <i className="fas fa-trash"></i>{" "}
                      {/*TODO wymienic ikonke smietnika*/}
                    </div>
                    <div className="cart-page__price">
                      <span>{item.price},00 zł</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cart-page__col2">
              <div className="cart-page__discount-code">
                <div className="cart-page__discount-code-input-wrapper">
                  <input type="text" required />
                  {/*FIXME funkcja odczytujaca czy czy w inpucie jest "" czy jakis tekst i na tej podstawie dodawanie klasy zeby zmienic i zachowac jego wyglad zamiast required*/}
                  <label>Kod rabatowy:</label>
                </div>
                {/* TODO handler sprawdzajacy czy kod rabatowy jest poprawny i aktualizacja ceny */}
                <button className="btn cart-page-discount-code-btn">Zatwierdź</button>
              </div>
              <div className="cart-page__costs">
                <div className="cart-page__products-price">
                  <span>Wartość produktów:</span>
                  <span>{priceForAllProducts},00 zł</span>
                </div>
                <div className="cart-page__delivery">
                  <span>Koszt dostawy od:</span>
                  <span>+{deliveryCost},00 zł</span>
                </div>
                <div className="cart-page__subtotal">
                  <span>Razem:</span>
                  <span>{priceForAllProducts + deliveryCost},00 zł</span>
                </div>
              </div>
              {/* TODO handler przejscia do danych adresowych i sprawdzenie ceny z kodem rabatowym jesli uzyty */}
              <button
                className="btn"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
              >
                Do Kasy
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
