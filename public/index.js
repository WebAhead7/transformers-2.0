const autoCompleteApi = "getcar/";
let grappedData;
let wantedSize=7;
// home url, change it on deployment ...
const homeUrl = "http://localhost:4020/";


//grapping HTML elements
const carList = document.querySelector("#cars");
const input = document.querySelector("#search-input");
const searchButton=document.querySelector("#search-btn");
const carContainer=document.querySelector("#car-container");


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


//here we are fetching data from thes server
input.addEventListener("keyup", (e) => {
  const url = `${homeUrl}${autoCompleteApi}?name=${e.target.value}&count=${wantedSize}`;
  fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error("error: failed to receice data ...");
      return response.json();
    })
    .then((data) => {
      console.log("DATTTTA:",data);
      if (data.length !== 0) {
        updateCarListOptions(data);
        grappedData = data;
        searchButton.addEventListener("click",()=>{
          let
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
