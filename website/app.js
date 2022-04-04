const { appendFile } = require("fs");

/* Global Variables */
const apiKey = "f8c5f2aecdaf9cd29865690ea6558781&units=imperial";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip="

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', Generate_OnClick);

function Generate_OnClick(event) {
    event.preventDefault();
    // get user input values
    const newZip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
  
    GetWeather(baseURL, newZip, apiKey)
      .then(function (userData) {
        // TODO post data
      }).then(function (newData) {
        // TODO update UU
      })
    // reset form
    form.reset();
  }

  
const GetWeather = async (baseURL, newZip, apiKey) => {
    // res equals to the result of fetch function
    const res = await fetch(baseURL + newZip + apiKey);
    try {
      // userData equals to the result of fetch function
      const userData = await res.json();
      return userData;
    } catch (error) {
      console.log("error", error);
    }
  }