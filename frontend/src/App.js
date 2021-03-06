import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
import Main from "./pages/Main/Main";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import ShippingAddressPage from "./pages/ShippingAddressPage/ShippingAddressPage";
import PlaceOrderPage from "./pages/PlaceOrderPage/PlaceOrderPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/kolekcja/:category" exact component={CollectionPage} />
            <Route path="/produkt/:id" component={ProductPage} />
            <Route path="/koszyk" component={CartPage} />
            <Route path="/dane-adresowe" component={ShippingAddressPage} />
            <Route path="/podsumowanie" component={PlaceOrderPage} />
            <Route path="/onas" component={AboutPage} />
            <Route path="/kontakt" component={ContactPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
