import React, { useEffect } from "react";
import { getCripto } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import CardCripto from "./CardCripto";
import USDC from "../../img/usdc.png";
import BITCOIN from "../../img/bitcoin.png";
import ETH from "../../img/eth.png";
import "./Cripto.css"


export default function Cripto(){
    const dispatch = useDispatch();
    const cripto = useSelector((state) => state.cripto);

    console.log(cripto)

    useEffect(() => {
        dispatch(getCripto());
      }, [dispatch]);

      const current = [
        { title: "USDC", sign: "$", data: cripto.usdt, image: USDC },
        { title: "Bitcoin", sign: "US$", data: cripto.btc, image: BITCOIN },
        { title: "Ethereum", sign: "US$", data: cripto.eth, image: ETH }
      ]

      console.log(current)

      return(
        <div className="projee">
      {cripto && (
        <div className="proyecto-container">
          {current.map((currency, index) => (
  currency.data && (
    <CardCripto
      key={index}
      title={currency.title}
      sign={currency.sign}
      // ask={currency.data.binance ? currency.data.binance.ask : currency.data.calypso.ask}
      ask={currency.title === "USDC" ? currency.data.binance.ask : currency.data.calypso.ask}
      image={currency.image}
  
    />
  )
))}
      </div>
      )}
    </div>
      )
}