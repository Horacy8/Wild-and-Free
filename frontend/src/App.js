import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
          <Route path="/collection" exact>
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
