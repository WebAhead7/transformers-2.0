const autoCompleteApi="getCar:";
let grappedData;
const testArr=[{
    "Name":"chevrolet chevelle malibu",
    "Miles_per_Gallon":18,
    "Cylinders":8,
    "Displacement":307,
    "Horsepower":130,
    "Weight_in_lbs":3504,
    "Acceleration":12,
    "Year":"1970-01-01",
    "Origin":"USA"
 },
 {
    "Name":"buick skylark 320",
    "Miles_per_Gallon":15,
    "Cylinders":8,
    "Displacement":350,
    "Horsepower":165,
    "Weight_in_lbs":3693,
    "Acceleration":11.5,
    "Year":"1970-01-01",
    "Origin":"USA"
 },
 {
    "Name":"plymouth satellite",
    "Miles_per_Gallon":18,
    "Cylinders":8,
    "Displacement":318,
    "Horsepower":150,
    "Weight_in_lbs":3436,
    "Acceleration":11,
    "Year":"1970-01-01",
    "Origin":"USA"
 },
 {
    "Name":"amc rebel sst",
    "Miles_per_Gallon":16,
    "Cylinders":8,
    "Displacement":304,
    "Horsepower":150,
    "Weight_in_lbs":3433,
    "Acceleration":12,
    "Year":"1970-01-01",
    "Origin":"USA"
 },
 {
    "Name":"ford torino",
    "Miles_per_Gallon":17,
    "Cylinders":8,
    "Displacement":302,
    "Horsepower":140,
    "Weight_in_lbs":3449,
    "Acceleration":10.5,
    "Year":"1970-01-01",
    "Origin":"USA"
 }];
 // home url, change it on deployment ...
const homeUrl ="http://localhost:3000/";
 //grapping HTML elements
const list=document.querySelector("#cars");
const input=document.querySelector("#search-input");
//here we are fetching data from the server and put it in array
input.addEventListener("keyup",(e)=>{
    fetch(`${autoCompleteApi}/${e.target.value}`)
    .then(response=>{
       if(response.status){
         return response.json();
       }
       else{
          return response.status;
       }
    })
    .then(data=>{
       grappedData=data;
    })
    .catch(error=>{
       console.log(error);
    });
});
