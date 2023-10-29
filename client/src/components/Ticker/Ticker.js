// Ticker.js
import React from "react";
import PropTypes from "prop-types";
import "./Ticker.css"; // Create a CSS file for styling

const Ticker = ({ data }) => {
  return (
    <tr className="ticker-row">
      <td>{data.ticker}</td>
      <td>{data.exchange}</td>
      <td>{data.price}</td>
      <td>{data.change}</td>
      <td>{data.change_percent}</td>
      <td>{data.dividend}</td>
      <td>{data.yield}</td>
      <td>{data.last_trade_time}</td>
    </tr>
  );
};

Ticker.propTypes = {
  data: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    change_percent: PropTypes.string.isRequired,
    dividend: PropTypes.string.isRequired,
    yield: PropTypes.string.isRequired,
    last_trade_time: PropTypes.string.isRequired,
  }).isRequired,
};

export default Ticker;
