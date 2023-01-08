import React from "react";
import "./App.css";
import Header from "./Header.js";
import Main from "./Main.js";

class App extends React.Component {
  render() {
    return (
      //add components
      <>
        <Header />
        <Main />
        <footer>DeltaV 2023</footer>
      </>
    );
  }
}

export default App;
