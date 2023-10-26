import React from "react";
import "./CardCripto.css";
import img from "../../img/usdc.png";


export default function CardCripto({ ask }) {
    return (
      <div className="project-cardcripto">
        
          <div className="dos-componente">
          <div className="logo-h1">
            <img
              className="logoeco"
              src={img}
              alt="EcoEcho"
            ></img>
        <h3>USDC</h3>
        </div>
        <div className="pricee">
          <h2>${ask}</h2>
          </div>
          </div>
       
      </div>
    );
  }