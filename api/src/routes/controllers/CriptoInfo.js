const axios = require("axios");

const getExchangeCripto = async () => {
  try {
    const response = await axios.get("https://criptoya.com/api/usdc/ars/0.5");
    console.log("Full response:", response.data);

    if (response.data && response.data.binance && response.data.binance.ask) {
      const exchangeCripto = {
        binance: {
          ask: response.data.binance.ask,
          // Otros datos si es necesario
        }
      };
      return exchangeCripto;
    } else {
      console.error("Estructura de datos incorrecta en la respuesta.");
      return null; // O maneja el error de alguna otra manera
    }
  } catch (err) {
    console.error("Error fetching exchange rates:", err);
    throw err; // Puedes manejar el error de manera más específica aquí si es necesario
  }
};

module.exports = {
  getExchangeCripto
};
