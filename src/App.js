import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const Category = ({ match }) => {
  <h1>{match.params.productCategory}</h1>;
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/:productCategory" component={Category} />
      </Switch>
    </div>
  );
}

export default App;
