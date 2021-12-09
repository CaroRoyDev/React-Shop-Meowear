import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthenticationPage from "./pages/authentication/authentication.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { ThemeProvider } from "styled-components";
import { normalTheme } from "./themes/themes";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <ThemeProvider theme={normalTheme}>
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <AuthenticationPage />
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
