const path = require("path");
const url = require("url");
const data = require("../../data/cars.json");
const missingHandler = require("./missingHandler");
const https = require("https");
const { resolve } = require("path");

// function providing us with cars info in array of objects
function getCarsByName(name, count = 5) {
  return data
    .filter((car) =>
      car.Name.toLocaleLowerCase().startsWith(name ? name.toLowerCase() : name)
    )
    .slice(0, count);
}

const api_key = process.env.API_KEY

// function returning a promise
function giphyRequest(name) {
  return promise = new Promise((resolve, reject) => {
    https.get(
      `https://api.giphy.com/v1/gifs/search?api_key=a6msXm46Y339YS7ORpcIOuHFITiSBqFL&q=${name}&limit=25&offset=0&rating=g&lang=en`
      , res => {
        var giphyData = ''

        res.on('data', chunk => {
          giphyData += chunk
        })
        res.on('end', () => {
          giphyData = JSON.parse(giphyData)
          const statusCode = res.statusCode
          resolve({ statusCode, giphyData })
        }
        )
        res.on('error', reject)
      })
  })
}

function getCarHandler(request, response) {
  const urlObject = url.parse(request.url, true);
  if (urlObject.pathname === "/getcar/") {
    const { name, count } = urlObject.query;
    const carsArr = getCarsByName(name, count)


    if (name) {
      giphyRequest(name)
        .then(data => {

          const giphyUrl = data.giphyData.data[0].images.original.url

          carsArr.push(giphyUrl)

          response.writeHead(data.statusCode, { "content-type": 'application/json' })
          response.end(JSON.stringify(carsArr))
        })
        .catch(err => {
          console.log(err)
          missingHandler(request, response)
        })
    }
  } else {
    missingHandler(request, response);
  }
}

module.exports = {
  getCarHandler,
  getCarsByName,
};
