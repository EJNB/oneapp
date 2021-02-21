import logo from "./logo.svg";
import "./App.css";
import { signInWithEmailAndPassword } from "./services/auth.service";
import React, { Component } from "react";

import { connect } from "react-redux";
import { signInStart } from "./redux/user/user.actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
            onClick={() =>
              this.props.signInWithEmail(
                "bitsceldacuatro@gmail.com",
                "Bits.celda04"
              )
            }
          >
            Get aws
          </button>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithEmail: (email, password) =>
    dispatch(signInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(App);
