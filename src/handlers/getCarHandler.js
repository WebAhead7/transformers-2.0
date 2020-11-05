const path = require("path");
const url = require("url");
const data = require("../../data/cars.json");
const missingHandler = require("./missingHandler");

function getCarsByName(name, count = 5) {
  return data
    .filter((car) =>
      car.Name.toLocaleLowerCase().startsWith(name ? name.toLowerCase() : name)
    )
    .slice(0, count);
}

function getCarHandler(request, response) {
  const urlObject = url.parse(request.url, true);
  if (urlObject.pathname === "/getcar/") {
    const { name, count } = urlObject.query;
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(getCarsByName(name, count)));
  } else {
    missingHandler(request, response);
  }
}

module.exports = {
  getCarHandler,
  getCarsByName,
};
