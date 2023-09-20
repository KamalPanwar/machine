import React from "react";
import ReactDOM from "react-dom";
import Animate from "./Animate";


function App() {
  return (
   <Animate />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
