import React, { useEffect } from "react";
import { getCripto } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import CardCripto from "./CardCripto";
import "./Cripto.css"


export default function Cripto(){
    const dispatch = useDispatch();
    const cripto = useSelector((state) => state.cripto);

    console.log(cripto)

    useEffect(() => {
        dispatch(getCripto());
      }, [dispatch]);

      return(
        // <div className="proje">
        <div className="projee">
        <CardCripto ask={cripto.binance ? cripto.binance.ask : ''} /> 
        {/* parece que cripto no está completamente definido cuando se renderiza el componente Cripto. Esto podría ocurrir si la acción getCripto asincrónica no ha terminado de cargar los datos antes de que se renderice el componente Cripto. */}
      </div>
      // </div>
      )
}