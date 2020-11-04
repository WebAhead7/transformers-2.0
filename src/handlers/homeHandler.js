const fs = require("fs");
const path = require("path");
function homeHanler(request, response) {
  fs.readFile(path.join(__dirname, "..", "..", "index.html"), (err, data) => {
    if (err) {
      console.log(err);
    }
    response.writeHead(200, { "content-type": "text/html" });
    response.end(data);
  });
}

module.exports = homeHanler;
