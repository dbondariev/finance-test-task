// TickerList.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Ticker from "../Ticker/Ticker";
import "./TickerList.css"; // Create a CSS file for styling

const socket = io("http://localhost:4000");

const TickerList = () => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      socket.emit("start");
    };

    fetchData();

    socket.on("ticker", (data) => {
      setTickers(data);
    });

    return () => {
      socket.off("ticker");
    };
  }, []);

  return (
    <div className="ticker-table">
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Exchange</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change Percent</th>
            <th>Dividend</th>
            <th>Yield</th>
            <th>Last Trade Time</th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((ticker) => (
            <Ticker key={ticker.ticker} data={ticker} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TickerList;
