import React from "react";

//Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StorefrontIcon from "@mui/icons-material/Storefront";

import "./Footer.css"

export default function Footer(){
    
    return(
        <div className="footer">
        <div className="footer-container">

          <div className="left">
          <div className="location">
              <h3 className="h3">
            Noticias financieras 
              </h3>
            </div>
            <div className="location">
              <p className="h4">
              El objetivo es compartir información financiera de Argentina y el mundo, en un solo lugar, en pocas palabras, simple y entretenido. 
              </p>
            </div>
              
          </div>
          <div className="right">
            
            <div className="location">
            <h3 className="h3">
            Colaboraciones
              </h3>
            </div>
            <div className="location">
            <p className="h4">
              BITCOIN:  
              </p>
            </div>
            <div className="location">
            <p className="h4">
              USDT:  
              </p>
            </div>
            <div className="location">
            <p className="h4">
              MERCADO PAGO: 0000003100088572764566  
              </p>
            </div>
          </div>

          <div className="right">
            
            <div className="location">
            <h3 className="h3">
            Contacto
              </h3>
            </div>
            <div className="location">
            <p className="h4">
              nahuel7474@gmail.com  
              </p>
            </div>
            <div className="location">
            <p className="h4">
              
              </p>
            </div>
          </div>

        </div>


        <hr /> {/* Línea separadora */}

        <p className="rights">
      &copy; 2023 NoticiasFinancieras | All Rights Reserved
    </p>
      </div>
    )
}