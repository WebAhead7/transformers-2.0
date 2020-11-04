const url = require("url");
const data = require("../../data/cars.json");
function getCarsByName(name) {
  return data.filter((car) => car.Name.includes(name)).slice(0, 5);
}
function getCarHandler(request, response) {
  const reqObject = url.parse(request.url, true);
  console.log("REQUEST OBJECT: ",reqObject);
   /*reqObject.query make this thing => ?name=mazda to this things: 
  {"name":"mazda"}*/
  console.log("reqObject: ",JSON.stringify(reqObject.query));
  console.log(reqObject.hostname);
  console.log(reqObject.pathname);
  console.log(reqObject.search);
  if (reqObject.pathname === "/getcar/") {
    console.log(getCarsByName(reqObject.query.name));
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(getCarsByName(reqObject.query.name)));
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Not Found</h1>");
  }
}

module.exports = getCarHandler;
