import React, { useState } from "react";

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
  const [showSale, setShowSale] = useState(false);

  const filterQueen = showSale ? items.filter((son) => son.onSale) : items;
  return (
    <div className="text-center">
      <h1 className="fw-bold">Shopping Cart</h1>
      <button className="btn btn-primary" onClick={() => {
        setShowSale(! showSale )
      }}>
        {showSale ? "Show Sale" : "Show All Sale"}
      </button>
      {filterQueen.map((king) => (
        <div key={king.id}>
          <div className="d-flex justify-content-center">
            <h2>{king.name}:</h2>
            <h2 className="ms-3 text-info">${king.price}</h2>
            <p className="p-2" style={{ color: king.onSale ? "green" : "red" }}>
              {king.onSale ? "On Sale" : "Not Sale"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
