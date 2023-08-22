// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// //import "./Navbar.css";

// export default function Navbar() {

//     const [click, setClick] = useState(false);
//      const handleClick = () => setClick(!click);

//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);


//     return(
//         <div className={color ? "header header-bg" : "header"}>
//         <div className="logo-h1">
          
//                  <h1 className="text-nav">Polleria Olivia</h1>
//                  </div>  
//                <ul className={click ? "nav-menu active" : "nav-menu"}>
//                <li>
//                  <Link to="/">Inicio</Link>
//                </li>
//                <li>
//                  <Link to="/products">Productos</Link>
//                </li>
//                <li>
//                  <Link to="/elaborados">Elaborados</Link>
//                </li>
//                <li>
//                  <Link to="/pastas">Pastas</Link>
//                </li>
//                </ul>
        
//              </div>
//            );
//          }
         