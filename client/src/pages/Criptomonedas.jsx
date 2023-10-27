import React from "react";
//import Blue from "../components/Blue/Blue";
import Cripto from "../components/Cripto/Cripto";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Criptomonedas.css"

export default function Inicio() {

  return (
  <div>
    <Navbar />
    <div className="cri">
    <Cripto />
    </div>
    <Footer />
  </div>
  );
}