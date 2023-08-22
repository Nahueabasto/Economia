// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');
// require('dotenv').config();

// // Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(process.env.PORT, () => {
//     console.log('%s listening at', process.env.PORT);
//   });
// });

const server = require('./src/app.js');
require('dotenv').config();

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`)
});


