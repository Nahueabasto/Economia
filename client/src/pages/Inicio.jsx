import React from "react";
//import Blue from "../components/Blue/Blue";
import Oficial from "../components/Oficial/Oficial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cripto from "../components/Cripto/Cripto";
import "./Inicio.css"

export default function Inicio() {

  return (
    <div>
    <Navbar />
    <div className="carduca">
    {/* <Blue /> */}
    <Oficial />
    </div>
    <div>
        <Cripto />
      </div>
    <div className="footer">
    <Footer />
    </div>
  </div>
  );
}


// import React, { Suspense, lazy } from "react";
// import Skeleton from "react-loading-skeleton"; // Reemplaza con la librería que estás utilizando
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Inicio.css";

// // Importa tus componentes de manera perezosa
// const LazyOficial = lazy(() => import("../components/Oficial/Oficial"));
// const LazyCripto = lazy(() => import("../components/Cripto/Cripto"));

// export default function Inicio() {
//   return (
//     <div>
//       <Navbar />
//       <div className="carduca">
//         {/* Suspense con Skeleton para Oficial */}
//         <Suspense fallback={<Skeleton />}>
//           <LazyOficial />
//         </Suspense>
//       </div>
//       <div>
//         {/* Suspense con Skeleton para Cripto */}
//         <Suspense fallback={<Skeleton />}>
//           <LazyCripto />
//         </Suspense>
//       </div>
//       <div className="footer">
//         <Footer />
//       </div>
//     </div>
//   );
// }