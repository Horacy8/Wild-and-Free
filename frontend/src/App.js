import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Collection from "./components/Collection";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import NotFound from "./components/NotFound";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import DeliveryPaymentScreen from "./screens/DeliveryPaymentScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/collection" exact component={Collection} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/shipping" component={ShippingAddressScreen} />
          <Route path="/payment" component={DeliveryPaymentScreen} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
