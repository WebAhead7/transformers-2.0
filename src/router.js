const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");
const getCarHandler = require("./handlers/getCarHandler");
function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.startsWith("/public")) {
    publicHandler(request, response);
  } else if (url.startsWith("/getcar/")) {
    getCarHandler(request, response);
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>404 Not Found</h1>");
  }
}

module.exports = router;
