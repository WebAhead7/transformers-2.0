const https = require("https");
const router = require("./router");
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"
require('dotenv').config()

const autoCompleteApi = "";

const server = https.createServer(router);

server.listen(port, () => {
  console.log(`listening on ${host}:${port}`);
});
