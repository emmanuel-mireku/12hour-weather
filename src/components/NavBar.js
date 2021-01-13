import React from "react";
import TemperatureToggler from "./TemperatureToggler";
import ThemeToggler from "./ThemeToggler";
import SelectCity from "./Search";

const NavBar = ({ themeToggler, search, celcius, fahrenheit, colC, colF }) => {
  return (
    <>
      <div className="nav-bar">
        <ul className="nav-bar-list">
          <li>
            <h4 className="page-heading">
              <a href="/">3 Hr Weather Forecast</a>
            </h4>
          </li>
          <li>
            <TemperatureToggler
              c={celcius}
              f={fahrenheit}
              cc={colC}
              cf={colF}
            />
          </li>
          <li>
            <ThemeToggler toggler={themeToggler} />
          </li>
          <li>
            <SelectCity onSearch={search} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
