const { appendFile } = require("fs");
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip="

/* Global Variables */
const apiKey = "f8c5f2aecdaf9cd29865690ea6558781&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

async function GetWeather(){
    await fetch(baseURL+zip+"&appid="+key);
}