import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Climate(props) {
  const { weather } = props;
  console.log("hiiii");
  console.log(weather);

  if (!weather) {
    return null;
  }
  if (weather.status === "not found") {
    return <p>{weather.message}</p>;
  }
  const { condition, temperature, wind } = weather;

  return (
    <div>
      <div>
        <div className="forecast-icon">
          <WeatherIcon code={condition.icon_url} alt={condition.description} />
        </div>
      </div>
      <div>
        <span className="text-large common-font-weight ">
          {Math.round(temperature.current)}
          <span className="temp-unit">°C</span>
        </span>
      </div>
      <div className="text-capitalize common-font-weight description-details">
        {" "}
        {condition.description}
      </div>

      <div className="text-grey">
        <div>
          <span className="text-capitalize common-font  ">Humidity:</span>
          <span className="text-capitalize common-font ">
            {temperature.humidity}%
          </span>
        </div>
        <div>
          <span className="text-capitalize common-font ">Wind:</span>
          <span className="text-capitalize common-font ">{wind.speed}km/h</span>
        </div>
      </div>
    </div>
  );
}
