import React from "react";
export default function Climate(props) {
  const { weather } = props;

  if (!weather) {
    return null;
  }
  if (weather.status === "not found") {
    return <p>{weather.message}</p>;
  }
  const { condition, temperature } = weather;

  return (
    <div>
      <div>
        <img
          className="forecast-icon"
          src={condition.icon_url}
          alt="temperatureicon"
        />
      </div>
      <div>
        <span className="text-large common-font-weight ">
          {Math.round(temperature.current)}°C
        </span>
      </div>
      <div className="text-capitalize common-font-weight description-details">
        {" "}
        {condition.description}
      </div>
    </div>
  );
}
