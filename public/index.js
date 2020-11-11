const autoCompleteApi = "getcar/";
let grappedData;
let wantedSize = 7;
let grappedDataIsUpdated = true;
// home url, change it on deployment ...
const homeUrl = "https://transformers2-0.herokuapp.com/";

//grapping HTML elements
const form = document.querySelector("form");
const carList = document.querySelector("#cars");
const input = document.querySelector("#search-input");
const carContainer = document.querySelector("#car-container");
const searchBtn = document.querySelector('#search-btn')
const giphyContainer = document.querySelector('#giphy-container')

//updateCarListOptions() function
function updateCarListOptions(data) {
  carList.innerHTML = "";
  data
    .map((car) => {
      let option = document.createElement("option");
      option.value = car.Name;
      return option;
    })
    .forEach((option) => {
      carList.appendChild(option);
    });
}

//Event listener for the form to show the data in the DOM
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //here we are checking if the data was fetched(ended).
  if (grappedDataIsUpdated) {
    if (input.value !== "") {
      carContainer.innerHTML = "";
      giphyContainer.innerHTML = ""
      let carDiv = document.createElement("div");
      carDiv.id = "car-div";
      console.log(grappedData);
      const carObj = grappedData[0];
      carDiv.innerHTML = `<h3>Car Model: <span>${carObj.Name}</span></h3>
      <h3>Horse Power: <span>${carObj.Horsepower}</span></h3>
      <h3>Weight(lbs): <span>${carObj.Weight_in_lbs}</span></h3>
      <h3>Acceleration: <span>${carObj.Acceleration}</span></h3>
      <h3>Year: <span>${carObj.Year}</span></h3>
      <h3>Origin: <span>${carObj.Origin}</span></h3>`;
      carContainer.appendChild(carDiv);



      const giphy = document.createElement("img");
      giphy.setAttribute('src', grappedData[grappedData.length - 1]);

      console.log('Heelo::: ', giphy);

      giphyContainer.appendChild(giphy);



      input.value = "";
    } else {
      alert("Type a car name please!");
    }
  }
});

//here we are fetching data (sending a request to the server)
input.addEventListener("keyup", (e) => {
  const url = `${homeUrl}${autoCompleteApi}?name=${e.target.value}&count=${wantedSize}`;
  grappedDataIsUpdated = false;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("error: failed to receice data ...");
      return response.json();
    })
    .then((data) => {

      if (data.length !== 0) {
        updateCarListOptions(data);
        grappedData = data;
      }
      grappedDataIsUpdated = true;
    })
    .catch((error) => {
      console.log(error);
      grappedDataIsUpdated = true;
    });
});


