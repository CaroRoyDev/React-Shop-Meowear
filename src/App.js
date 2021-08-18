import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Authentication from "./pages/authentication/authentication.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({currentUser: userAuth});
      }
      this.props.history.push("/");
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

 

  render() {

    const {currentUser} = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
