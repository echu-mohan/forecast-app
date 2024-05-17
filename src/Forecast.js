import React from "react";
import "./App.css";

function formatDay(time) {
  let newDate = new Date(time * 1000);
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[newDate.getDay()];
}

export default function Forecast(props) {
  const { response } = props;
  return (
    <div className="forecast">
      {response.map(function (day) {
        return (
          <div className="day">
            <div className="week">{formatDay(day.time)}</div>
            <img src={day.condition.icon_url} alt="" />
            <div>
              <span>{Math.round(day.temperature.maximum)}° </span>
              <span>{Math.round(day.temperature.minimum)}°</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
