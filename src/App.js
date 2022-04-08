import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="Tokyo" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
