import React from "react";
import "./Card.css";

export default function Card({ title, value_buy, value_sell }) {
  return (
    <div className="project-card">
      <h3 className="card-title">{title}</h3>
      <div className="dos-component">
        <div className="compra">
          <h4>Compra</h4>
          <p className="price green">${value_buy}</p>
        </div>
        <div className="venta">
          <h4>Venta</h4>
          <p className="price red">${value_sell}</p>
        </div>
      </div>
    </div>
  );
}


