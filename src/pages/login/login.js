import React, { Component } from "react";
import "./login.css";

import firebase from "../../firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signUp = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase.fireDB
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {});
  };

  login = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase.fireDB
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Login &amp; Sign Up
                  </h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                      <label for="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                      <label for="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                    </div>
                    <button
                      className="btn btn-lg btn-info btn-block text-uppercase"
                      type="submit"
                      onClick={this.login}
                    >
                      Sign in
                    </button>

                    <button
                      className="btn btn-lg btn-info btn-block text-uppercase"
                      type="submit"
                      onClick={this.signUp}
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
