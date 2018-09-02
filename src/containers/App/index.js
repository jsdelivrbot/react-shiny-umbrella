import React, { Component } from "react";
// eslint-disable-next-line
import ReactDom from "react-dom";
import logo from "../../icons/logo/logo.svg";
import "./App.css";

import styled from "styled-components";

const AppDiv = styled.div`
  background-color: black;
  color: white;
  text-align: center;       
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to gh-pages React-website-test</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload the
          App.
        </p>
      </AppDiv>
    );
  }
}

export default App;
