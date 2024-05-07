import React from "react";
import City from "./City";

export default function Weather() {
  function updateCity() {
    console.log("inside updatecity");
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("pressed the submit button");
  }
  return (
    <>
      <div className="container">
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
        {/* pass the weather of the city */}
        <City city={"London"} />
        {/* create a component forecast and pass the forecast value  */}
      </div>
    </>
  );
}
