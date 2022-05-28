import React from "react";
import "./styles/App.css";
import Information from "./components/Information.js";

class App extends React.Component {
  render() {
    return (
      <div id="app-div">
        <Information />
        <Information />
        <Information />
      </div>
    );
  }
}

export default App;
