const express = require("express");
const { conn } = require('./src/db.js');
const server = require('./src/app.js');

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Sincronizar los modelos con la base de datos
conn.sync({ force: false }).then(() => {
  console.log('Database synced');
});
