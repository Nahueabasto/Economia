const { Router } = require("express");
const router = Router();
const { getExchangeCripto } = require("./controllers/CriptoInfo");

router.get("/cripto", async (req, res) => {
  try {
    const exchangeData = await getExchangeCripto();
    const usdtData = exchangeData.usdt;
    const btcData = exchangeData.btc;
    const ethData = exchangeData.eth;

    res.json({
      usdt: usdtData,
      btc: btcData,
      eth: ethData,
    });
  } catch (error) {
    // Handle any errors and send an error response
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;


