const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const PORT = process.env.PORT || 3000

const router = Router();
const getDolar = require("./getDolar");
//const bodyParser = require("body-parser");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", getDolar);

//app.use(bodyParser.urlencoded)


module.exports = router;

