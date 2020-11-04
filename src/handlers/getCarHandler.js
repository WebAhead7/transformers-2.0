const path = require("path");

const url = require("url");
const data = require(path.join(__dirname, "..", "..", "data/cars.json"));
function getCarsByName(name, count = 5) {
  return data.filter((car) => car.Name.startsWith(name)).slice(0, count);
}
function getCarHandler(request, response) {
  const reqObject = url.parse(request.url, true);
  console.log(JSON.stringify(reqObject.query));
  console.log(reqObject.hostname);
  console.log(reqObject.pathname);
  console.log(reqObject.search);
  if (reqObject.pathname === "/getcar/") {
    console.log(getCarsByName(reqObject.query.name));
    response.writeHead(200, { "content-type": "application/json" });
    response.end(
      JSON.stringify(getCarsByName(reqObject.query.name, reqObject.query.count))
    );
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Not Found</h1>");
  }
}

module.exports = getCarHandler;
