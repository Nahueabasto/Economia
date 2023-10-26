const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const getDolar = require("./getDolar");
const getCripto = require("./getCripto");
//const bodyParser = require("body-parser");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", getDolar);
router.use("/", getCripto);

//app.use(bodyParser.urlencoded)


module.exports = router;

