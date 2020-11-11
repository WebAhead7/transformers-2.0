const http = require("http");
const router = require("./router");
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"
require('dotenv').config()

const autoCompleteApi = "";

const server = http.createServer(router);

server.listen(port, () => {
  console.log(`listening on ${host}:${port}`);
});
