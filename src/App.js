import React from "react";
import Weather from "./Weather";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello everyone</h1>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
