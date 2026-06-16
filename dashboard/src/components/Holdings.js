import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [positions, setPositions] = useState([]);

  // Fetch holdings
  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => setAllHoldings(res.data))
      .catch((err) => console.error("Error fetching holdings:", err));
  }, []);

  // Fetch positions
  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => setPositions(res.data))
      .catch((err) => console.error("Error fetching positions:", err));
  }, []);

  // Chart data
  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {/* Holdings Table */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="row">
        <div className="col">
          <h5>29,875.<span>55</span></h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>31,428.<span>95</span></h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Chart */}
      {allHoldings.length > 0 ? (
        <VerticalGraph data={data} />
      ) : (
        <p>No holdings data available</p>
      )}

      {/* Positions Table */}
      <h3 className="title" style={{ marginTop: "40px" }}>
        Positions ({positions.length})
      </h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos, index) => {
              const curValue = pos.price * pos.qty;
              const isProfit = curValue - pos.avg * pos.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = pos.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{pos.name}</td>
                  <td>{pos.qty}</td>
                  <td>{pos.avg.toFixed(2)}</td>
                  <td>{pos.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - pos.avg * pos.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{pos.net}</td>
                  <td className={dayClass}>{pos.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Holdings;