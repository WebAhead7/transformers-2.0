const fs = require("fs");
const path = require("path");
const missingHandler = require("./missingHandler");
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".jpg": "image/jpg",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};
function resourcesHandler(request, response) {
  const filePath = path.join(__dirname, "..", "..", request.url);
  const contentType = types[path.extname(filePath)];
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      missingHandler(request, response);
    } else {
      try {
        response.writeHead(200, { "content-type": contentType });
        response.end(file);
      } catch (error) {
        console.error(error.message);
        console.log(error);
        missingHandler(request, response);
      }
    }
  });
}

module.exports = resourcesHandler;
