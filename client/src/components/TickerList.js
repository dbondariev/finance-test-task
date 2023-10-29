import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Ticker from "./Ticker";

const socket = io("http://localhost:4000"); // Set the correct URL

const TickerList = () => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    // Function to fetch new data from the server
    const fetchData = () => {
      socket.emit("start");
    };

    // Initial data fetch
    fetchData();

    // Set up a timer to fetch new data every 5 seconds
    const timer = setInterval(fetchData, 5000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    socket.on("ticker", (data) => {
      // Handle incoming ticker data
      // Flatten the received array of arrays
      const flattenedData = data.flat();
      setTickers((prevTickers) => {
        // Merge the new data with the existing data, preserving unique tickers
        const mergedTickers = [...prevTickers, ...flattenedData].reduce(
          (acc, ticker) => {
            let existingTicker = acc.find((t) => t.ticker === ticker.ticker);
            if (existingTicker) {
              // Update the existing ticker
              existingTicker = { ...existingTicker, ...ticker };
            } else {
              // Add a new ticker
              acc.push(ticker);
            }
            return acc;
          },
          [],
        );
        return mergedTickers;
      });
    });
  }, []);

  useEffect(() => {
    console.log("Updated Tickers", tickers);
  }, [tickers]);

  return (
    <div className="ticker-list">
      {tickers.map((ticker) => (
        <Ticker key={ticker.ticker} data={ticker} />
      ))}
    </div>
  );
};

export default TickerList;
