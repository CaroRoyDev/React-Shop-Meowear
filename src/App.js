import React from "react";
import {Route, Switch} from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const Category = ({match}) => {
  <h1>{match.params.productCategory}</h1>
}

function App() {
  return (
   
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/:productCategory' component={Category}/>
    </Switch>
   
  );
}

export default App;
