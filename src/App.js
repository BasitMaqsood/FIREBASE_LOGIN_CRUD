import React, { Component } from "react";
import "./App.css";

import Contact from "./component/contact";
import Login from "./pages/login/login";
import Loader from "./component/loader/loader";

import firebase from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loader: true,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebase.fireDB.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loader: false,
          user,
        });
      } else {
        this.setState({
          loader: false,
          user: null,
        });
      }
    });
  };
  render() {
    const { user, loader } = this.state;

    return <div>{user ? <Contact /> : <Login />}</div>;
  }
}

export default App;
