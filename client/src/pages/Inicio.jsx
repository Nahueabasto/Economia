import React from "react";
//import Blue from "../components/Blue/Blue";
import Oficial from "../components/Oficial/Oficial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Inicio.css"

export default function Inicio() {

  return (
    <div>
    <Navbar />
    <div className="carduca">
    {/* <Blue /> */}
    <Oficial />
    </div>
    <div className="footer">
    <Footer />
    </div>
  </div>
  );
}
