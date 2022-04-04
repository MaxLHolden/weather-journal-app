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
  
    getWeather(baseURL, newZip, apiKey)
      .then(function (userData) {
            postData('/add', { date: newDate, temp: userData.main.temp, content })
      }).then(function (newData) {
            updateUI();
      })
    // reset form
    form.reset();
  }

const getWeather = async (baseURL, newZip, apiKey) => {
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

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const req = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        date: data.date,
        temp: data.temp,
        content: data.content
      })
    })
    try {
      const newData = await req.json();
      return newData;
    }
    catch (error) {
      console.log(error);
    }
  };

  const updateUI = async () => {
    const request = await fetch('/all');
    try {
      const allData = await request.json()
      // update new entry values
      document.getElementById('date').innerHTML = allData.date;
      document.getElementById('temp').innerHTML = allData.temp;
      document.getElementById('content').innerHTML = allData.content;
    }
    catch (error) {
      console.log("error", error);
    }
  };