const fs = require("fs");
const path = require("path");
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".jpg": "image/jpg",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};
function publicHandler(request, response) {
  const filePath = path.join(__dirname, "..", "..", request.url);
  const contentType = types[path.extname(filePath)];
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    }
    else{
      try {
        response.writeHead(200, { "content-type": contentType });
        response.end(file);
      } catch (error) {
        console.error(error.message);
        console.log(error);
        response.writeHead(404, { "content-type": "text/plain" });
        response.end("Error");
      }
    }
  });
}

module.exports = publicHandler;
