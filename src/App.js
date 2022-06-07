import React from "react";
import "./styles/App.css";
import Information from "./components/Information.js";

function App(props) {
  return (
    <div id="app-div">
      <Information heading="General Information"/>
      <Information heading="Educational Experience"/>
      <Information heading="Practical Experience"/>
    </div>
  );
}

export default App;
