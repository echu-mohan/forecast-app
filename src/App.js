import React from "react";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Weather />

          {/* we have to design the search bar and submit button, on submit we have to set weather of that city to usestate setWeather  */}
          {/* use the api and find the forecast info and set it to forecast usestate */}
        </header>
        <footer>
          <p>
            The Project is coded by{" "}
            <a href="https://github.com/echu-mohan/forecast-app">Lakshmi</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
