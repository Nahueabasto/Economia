import React from "react";
import "./Card.css";

export default function Card({ title, value_buy, value_sell }) {
  return (
    <div className="project-card">
      <div className="contenedor-card">
      <h2>{title}</h2>
      <div className="dos-component">
      <div className="compra">
      <h4>compra</h4>
      <h2 className="project-title">${value_buy}</h2>
      </div>
      <div className="venta">
      <h4>venta</h4>
      <h2 className="project-title">${value_sell}</h2>
      </div>
      </div>
      </div>
    </div>
  );
}


