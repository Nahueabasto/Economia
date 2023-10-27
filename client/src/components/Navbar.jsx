import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {

    const [click, setClick] = useState(false);
     const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);


    return(
      <div className={color ? "header header-bg" : "header"}>
      <div className="logo-h1">
               <Link to="/" >
                 {/* <img
                   className="logoeco"
                   src={""}
                   alt=""
                   width="90"
                   height="90"
                 ></img> */}
               </Link>
               <h1 className="text-nav">Noticias financieras</h1>
               </div>  
             <ul className={click ? "nav-menu active" : "nav-menu"}>
             <li>
               <Link to="/">Inicio</Link>
             </li>
             {/* <li>
               <Link to="/MercadoBlue">Mercado blue</Link>
             </li> */}
              <li>
               <Link to="/Criptomonedas">Criptomonedas</Link>
             </li>
             
             </ul>
             <div className="hamburguer" onClick={handleClick}>
             {click ? (
               <FaTimes size={30} style={{ color: "#fff" }} />
             ) : (
               <FaBars size={30} style={{ color: "#fff" }} />
             )}
           </div>
           </div>
         );
       }
       
         

         // {
//   "version": 2,
//   "builds": [
//     { "src": "frontend/package.json", "use": "@vercel/static-build" },
//     { "src": "api/src/app.js", "use": "@vercel/node" }
//   ],
//   "routes": [
//     { "src": "/api/(.*)", "dest": "api/src/routes/DolarInfo.js" },
//     { "src": "/(.*)", "dest": "frontend/index.html" }
//   ]
// }
