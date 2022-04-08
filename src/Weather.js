import React from "react";
import Footer from "./Footer";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "80",
    wind: "10",
    temperature: "20",
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>

        <ul>
          <li> Last Updated: {weatherData.date}</li>
          <li> {weatherData.description}</li>
        </ul>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="weather-temperature">
            <span className="units">
              <br />
              <img src={weatherData.imgUrl} alt="Clear" />
              <strong>{weatherData.temperature}</strong>
              <a href="/">°C| </a>
              <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <div className="information">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </div>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}
