import React from "react";
import PropTypes from "prop-types";

const Ticker = ({ data }) => {
    return (
        <div className="ticker">
            <h2>{data.ticker}</h2>
            <p>Exchange: {data.exchange}</p>
            <p>Price: {data.price}</p>
            <p>Change: {data.change}</p>
            <p>Change Percent: {data.change_percent}</p>
            <p>Dividend: {data.dividend}</p>
            <p>Yield: {data.yield}</p>
            <p>Last Trade Time: {data.last_trade_time}</p>
        </div>
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

