//jshint esversion:6

const express = require("express");
const app = express();

const https = require("https");
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

app.get ("/", function(req, res){

https.get(url, function(response){
	console.log(response.statusCode);

    response.on("data", function(data){
    const weatherData = JSON.parse(data);
    const weatherDescription = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    const object = {
        name: "Dehine",
        food: "Firfir"
    }

    console.log(JSON.stringify(object));
    console.log(weatherData);


    app.listen(3000, function(){
        console.log("Server is running on port 3000.");
    });

        res.write("The temprature currently here is " + temp + "℃");
        res.write("The weather can be described as " + weatherDescription);
        res.write("<img src=" + imageURL + ">");
        res.send("hey there");
    });

});

});

