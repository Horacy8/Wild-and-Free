import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./inne/Header";
import Main from "./pages/Main";
import Footer from "./widgets/Footer/Footer";
import CollectionPage from "./pages/CollectionPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFoundPage";
import ShippingAddressPage from "./pages/ShippingAddressPage";
import DeliveryPaymentPage from "./pages/DeliveryPaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/collection" exact component={CollectionPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/shipping" component={ShippingAddressPage} />
          <Route path="/payment" component={DeliveryPaymentPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
