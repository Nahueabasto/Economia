const axios = require("axios");

const getExchangeCripto = async () => {
  try {
    const response = await axios.get("https://criptoya.com/api/usdt/ars/0.5");
    // console.log("Full response:", response.data);
    

      const exchangeCripto = {
        binance: {
          ask: response.data.binance.ask,
      
        }
      };

      return exchangeCripto;
    } catch (err) {
        console.error("Error fetching exchange rates:", err);
        throw err; // You might want to handle the error more gracefully
      }
    };

module.exports = {
  getExchangeCripto
};
