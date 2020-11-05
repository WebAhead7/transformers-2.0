const fs = require("fs");
const path = require("path");
const missingHandler = require("./missingHandler");

function homeHanler(request, response) {
  console.log(request.url);
  fs.readFile(path.join(__dirname, "..", "..", "public","index.html"), (err, data) => {
    if (err) {
      console.log(err);
      missingHandler(request, response);
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(data);
    }
  });
}

module.exports = homeHanler;
