const http = require("http");
const router = require("./router");
const port = 3000; //process.env.PORT ||
const host = "localhost:"; //process.env.HOST ||
const autoCompleteApi = "";

const server = http.createServer(router);

server.listen(port, () => {
  console.log(`listening on ${host}${port}`);
});
