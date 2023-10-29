import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Ticker from "./Ticker";

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
    <div className="ticker-list">
      {tickers.map((ticker) => (
        <Ticker key={ticker.ticker} data={ticker} />
      ))}
    </div>
  );
};

export default TickerList;
