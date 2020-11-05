const path = require("path");
const url = require("url");
const data = require("../../data/cars.json");

function getCarsByName(name, count = 5) {
  return data.filter((car) => car.Name.startsWith(name)).slice(0, count);
}

function getCarHandler(request, response) {
  const urlObject = url.parse(request.url, true);
  if (urlObject.pathname === "/getcar/") {
    const { name, count } = urlObject.query;
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(getCarsByName(name, count)));
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Not Found</h1>");
  }
}

module.exports = {
  getCarHandler,
  getCarsByName,
};
