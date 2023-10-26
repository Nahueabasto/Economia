const { Router } = require("express");
const router = Router();
const { getExchangeCripto } = require("./controllers/CriptoInfo");

router.get("/cripto", async (req, res) => {
    try {
      const exchangeData = await getExchangeCripto(); 
        const binanceExchange = exchangeData.binance;
     console.log(binanceExchange)
        res.json({
            binance: binanceExchange,
          });
    } catch (error) {
      // Handle any errors and send an error response
      res.status(500).json({ error: "An error occurred" });
    }
  });
  
  // Export the router
  module.exports = router;

