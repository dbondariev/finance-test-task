// src/App.js
import React from "react";
import "./App.css";
import TickerList from "./components/TickerList/TickerList";

function App() {
  return (
    <div className="app">
      <h1>Real-Time Price Tickers</h1>
      <TickerList />
    </div>
  );
}

export default App;
