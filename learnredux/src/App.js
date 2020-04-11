import React, { Component } from "react";
import "./App.css";
import Shop from "./shop/Shop";
import { Provider } from "react-redux";
import { sportDataStore } from "./data/Store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={sportDataStore}>
        <Router>
          <Switch>
            <Route path="/shop" component={Shop} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
