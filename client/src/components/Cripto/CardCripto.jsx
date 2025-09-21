import React from "react";
import "./CardCripto.css";



export default function CardCripto({ title, sign, ask, image }) {
  return (
    <div className="project-card">
      <div className="dos-component">
        <div className="logo-h1">
          <img
  className="logoeco"
  src={image}
  alt={title}
  style={{ width: "40px", height: "auto" }} // ajustás el tamaño
/>
         <h3 style={{ fontSize: "1rem" }}>{title}</h3>
        </div>
        <div className="pricee">
          <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
            <span style={{ marginRight: '2px' }}>{sign}</span>
            {ask}
          </h2>
        </div>
      </div>
    </div>
  );
}