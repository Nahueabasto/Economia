import React from "react";
import "./Card.css";

export default function CardBlue({ value_buy, value_sell }) {
  return (
    <div className="project-card">
      
      <h4>Dolar Blue</h4>
      <div className="dos-component">
      <div className="compra">
      <a>compra</a>
      <h2 className="project-title">${value_buy}</h2>
      </div>
      <div className="venta">
      <a>venta</a>
      <h2 className="project-title">${value_sell}</h2>
      </div>
      </div>
    </div>
  );
}


