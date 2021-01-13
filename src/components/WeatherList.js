import React from "react";
import WeatherCard from "./WeatherCard";
// import "../css/WeatherList.scss";
let getDate = (dt) => {
  let date = new Date(dt * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return {
    day: days[date.getDay()],
    time: date.toLocaleTimeString([], {
      hour: "numeric",
    }),
  };
};
const WeatherList = ({ weathers, city, tempType }) => {
  let { dt } = weathers[0];
  let startDate = getDate(dt);
  let endDate = getDate(weathers[4].dt);
  return (
    <>
      <div className="update">
        <h3>
          Weather update in {city.name}, {city.country} from {startDate.day},{" "}
          {startDate.time} to {endDate.day}, {endDate.time}
        </h3>
      </div>
      <div className="container">
        {weathers.map(({ dt, main, weather }) => (
          <div key={dt}>
            <WeatherCard
              tempMax={main.temp_max}
              tempMin={main.temp_min}
              dt={dt * 1000}
              main={weather[0].main}
              icon={weather[0].icon}
              description={weather[0].description}
              tempType={tempType}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherList;
