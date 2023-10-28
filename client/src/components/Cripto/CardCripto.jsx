import React from "react";
import "./CardCripto.css";



export default function CardCripto({ title, sign, ask, image }) {
    return (
      <div className="project-cardcripto">
        
          <div className="dos-componente">
          <div className="logo-h1">
            {/* <img
              className="logoeco"
              src={img}
              alt="EcoEcho"
            ></img> */}
            <img
            className="logoeco"
            src={image}
          />
        <h3>{title}</h3>
        </div>
        <div className="pricee">
        <h2 style={{ display: 'flex', alignItems: 'center' }}>
  <span style={{ marginRight: '3px' }}>{sign}</span>
  {ask}
</h2>
          </div>
          </div>
       
      </div>
    );
  }