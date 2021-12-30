import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
import Main from "./pages/Main/Main";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/kolekcja/:category" exact component={CollectionPage} />
          <Route path="/produkt/:id" component={ProductPage} />
          <Route path="/kontakt" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
