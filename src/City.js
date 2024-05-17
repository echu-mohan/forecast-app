import React from "react";
export default function City(props) {
  const { weather } = props;

  if (!weather) {
    return null;
  }
  if (weather.status === "not found") {
    return <p>{weather.message}</p>;
  }
  const { city } = weather;

  return (
    <div className="row align-items-center">
      <div className="current-city common-font col-6 d-flex justify-content-center">
        {city}
      </div>
      <div className="last-updates common-font col-6 d-flex justify-content-center">
        Last Update:{props.time}
      </div>
    </div>
  );
}
