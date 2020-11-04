const autoCompleteApi = "getcar/";
let grappedData;
const count = 7;

// home url, change it on deployment ...
const homeUrl = "http://localhost:3000/";
//grapping HTML elements
const carList = document.querySelector("#cars");
const input = document.querySelector("#search-input");

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
//here we are fetching data from the server and put it in array
input.addEventListener("keyup", (e) => {
  const url = `${homeUrl}${autoCompleteApi}?name=${e.target.value}&count=${count}`;
  fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error("error: failed to receice data ...");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.length !== 0) {
        updateCarListOptions(data);
        grappedData = data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
