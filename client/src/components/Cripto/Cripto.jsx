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
        { title: "USDC", sign: "$", data: cripto.usdc, image: USDC },
        { title: "Bitcoin", sign: "US$", data: cripto.btc, image: BITCOIN },
        { title: "Ethereum", sign: "US$", data: cripto.eth, image: ETH }
      ]


      return (
        <div className="projee">
          {cripto && (
            <div className="proyecto-container">
              {current.map((currency, index) => {
                const buenbitAsk = currency.data?.buenbit?.ask;
                const decryptoAsk = currency.data?.decrypto?.ask;
                const letsbitAsk = currency.data?.letsbit?.ask;
      
                if (buenbitAsk !== undefined || decryptoAsk !== undefined || letsbitAsk !== undefined) {
                  return (
                    <CardCripto
                      key={index}
                      title={currency.title}
                      sign={currency.sign}
                      // ask={currency.data.binance ? currency.data.binance.ask : currency.data.calypso.ask}
//ask={currency.title === "USDC" ? currency.data.buenbit.ask : currency.data.calypso.ask}
                      ask={buenbitAsk || decryptoAsk || letsbitAsk}
                      image={currency.image}
                    />
                  );
                } else {
                  console.error(`Ask data not found for currency: ${currency.title}`);
                  return null; // or any fallback component if needed
                }
              })}
            </div>
          )}
        </div>
      );
      }




