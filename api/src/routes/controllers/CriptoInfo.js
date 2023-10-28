const axios = require("axios");

const getExchangeCripto = async () => {
  try {
    const [usdtResponse, btcResponse, ethResponse] = await Promise.all([
      axios.get("https://criptoya.com/api/usdt/ars/0.5"),
      axios.get("https://criptoya.com/api/btc/usd/0.5"),
      axios.get("https://criptoya.com/api/eth/usd/0.5"),
    ]);

    const exchangeCripto = {
      usdt: {
        binance: {
          ask: usdtResponse.data.binance.ask,
        },
      },
      btc: {
        calypso: {
          ask: btcResponse.data.calypso.ask,
        },
      },
      eth: {
        calypso: {
          ask: ethResponse.data.calypso.ask,
        },
      },
    };

    return exchangeCripto;
  } catch (err) {
    console.error("Error fetching exchange rates:", err);
    throw err;
  }
};

module.exports = {
  getExchangeCripto,
};