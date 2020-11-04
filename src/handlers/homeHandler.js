const fs = require("fs");
const path = require("path");
function homeHanler(request, response) {
  console.log(request.url);
  fs.readFile(path.join(__dirname, "..", "..", "index.html"), (err, data) => {
    if (err) {
      console.log(err);
    }
    else{
    response.writeHead(200, { "content-type": "text/html" });
    response.end(data);
    }
  });
}

module.exports = homeHanler;
