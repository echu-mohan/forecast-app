import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="#E4A714"
      size={64}
      animate={true}
    />
  );
}
