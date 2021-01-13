import React from "react";
// import "../css/WeatherCard.scss";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";
import { IconContext } from "react-icons";

const round = (degree) => {
  return Math.round(degree);
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const convertfromFtoC = (degree) => (degree - 32) * (5 / 9);

let upLimit = 65;

const WeatherCard = ({
  dt,
  tempMin,
  tempMax,
  main,
  icon,
  description,
  tempType,
}) => {
  if (tempType === "C") {
    tempMin = convertfromFtoC(tempMin);
    tempMax = convertfromFtoC(tempMax);
    upLimit = 18;
  } else {
    upLimit = 65;
  }
  const date = new Date(dt);
  return (
    <div className="weather-card">
      <div className="weather-image">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
        />
      </div>
      <h2 className="high">
        <span>
          <IconContext.Provider
            value={{
              color: `${tempMax > upLimit ? "red" : "blue"}`,
              className: "space",
            }}
          >
            <IoTrendingUp />
          </IconContext.Provider>
        </span>
        {round(tempMax)} {String.fromCharCode(176)} {tempType}
      </h2>
      <h3 className="low">
        <span>
          <IconContext.Provider
            value={{
              color: `${tempMin <= upLimit ? "blue" : "red"}`,
              style: { verticalAlign: "middle" },
              className: "space",
            }}
          >
            <IoTrendingDown />
          </IconContext.Provider>
        </span>
        {round(tempMin)} {String.fromCharCode(176)} {tempType}
      </h3>
      <div className="weather-main">
        <h2 className="weather-title">{main}</h2>
        <h6 className="weather-description">{description}</h6>
        <p className="weather-date">
          {days[date.getDay()]} |{" "}
          {date.toLocaleTimeString([], {
            hour: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
