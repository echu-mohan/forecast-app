import React from "react";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="app h-100 h-75 mw-100 w-100">
      <div className="container border border-dark rounded-top">
        <header>
          <Weather />

          {/* we have to design the search bar and submit button, on submit we have to set weather of that city to usestate setWeather  */}
          {/* use the api and find the forecast info and set it to forecast usestate */}
        </header>
        <footer className="footer">
          <p>
            The Project is coded by{" "}
            <a href="https://github.com/echu-mohan/forecast-app">Lakshmi</a>
            and open-sourced on
            <a href="https://github.com/echu-mohan/forecast-app">GitHub</a>
            and hosted on
            <a href="https://weatherappforall.netlify.app/">Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
