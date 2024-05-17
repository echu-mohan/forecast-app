import React, { useState } from "react";
import City from "./City";
import Forecast from "./Forecast";
import Climate from "./Climate";
import axios from "axios";
const API_KEY = "b2a5adcct04b33178913oc335f405433";

export default function Weather() {
  let [city, setCity] = useState("");
  let [time, setTime] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const now = new Date();

  function setCurrentTime() {
    let minute = now.getMinutes();
    if (now.getMinutes() <= 9) {
      minute = `0:${now.getMinutes()}`;
    }
    setTime(`${now.getHours()}:${minute}`);
  }

  function updateCity(event) {
    console.log(event);
    setCity(event.target.value);
  }

  const getWeather = async () => {
    console.log("inside getweather");
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${API_KEY}&units=metric`;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${API_KEY}&units=metric`;
    const weatherResponse = await axios.get(url);
    const response = await axios.get(apiUrl);

    setCurrentTime();
    setWeather(weatherResponse.data);
    setForecastData(response.data.daily);
  };
  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
  }
  return (
    <>
      <City weather={weather} time={time} />

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="search-input common-details "
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="common-details" />
      </form>
      <Climate weather={weather} />
      <Forecast response={forecastData} />
      {/* create a component forecast and pass the forecast value  */}
    </>
  );
}
