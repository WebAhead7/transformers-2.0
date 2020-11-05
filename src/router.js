const homeHandler = require("./handlers/homeHandler");
const resourcesHandler = require("./handlers/resourcesHandler");
const getCarHandler = require("./handlers/getCarHandler").getCarHandler;
function router(request, response) {
  const url = request.url;
  //if its the home page
  if (url === "/") {
    homeHandler(request, response);
  } 
  /*this will handle the request of HTML page or CSS Page
   when the home page is loaded(they are in the public
  folder so the url will be /public/.......).
  So this if statement body will run at some level because
  these pages will be requested after the home page is loaded
  as mentioned*/
  else if (url.startsWith("/public")) {
    resourcesHandler(request, response);
  }
  /*The getcar word is just a word for us to know that
  this url sent with dynamic data*/
  else if (url.startsWith("/getcar/")) {
    getCarHandler(request, response);
  } 
  else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>404 Not Found</h1>");
  }
}

module.exports = router;
