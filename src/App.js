import React from "react";
import City from "./City";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function updateCity(event) {
  console.log("inside updatecity");
}
function handleSubmit(event) {
  event.preventDefault();
  console.log("pressed the submit button");
}

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Weather App</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-input common-details "
              onChange={updateCity}
            />
            <input
              type="submit"
              value="Search"
              className="search-button common-details "
            />
          </form>
          {/* we have to design the search bar and submit button, on submit we have to set weather of that city to usestate setWeather  */}
          {/* use the api and find the forecast info and set it to forecast usestate */}
        </header>
        <footer>
          <p>
            The Project is coded by{" "}
            <a href="https://github.com/echu-mohan/forecast-app">Lakshmi</a>
          </p>
        </footer>
        {/* pass the weather of the city */}
        <City city={"London"} />
        {/* create a component forecast and pass the forecast value  */}
      </div>
    </div>
  );
}
