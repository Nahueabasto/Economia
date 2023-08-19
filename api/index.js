
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const express = require("express");
const app = express();

const port = process.env.PORT || 3001

app.listen(port);
console.log(`Listen on ${port}`)

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
