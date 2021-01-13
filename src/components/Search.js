import React, { useState } from "react";
// import "../css/SelectCity.scss";
import { IconContext } from "react-icons";
import { IoSearchOutline } from "react-icons/io5";

const SelectCity = ({ onSearch }) => {
  const [city, setCity] = useState("");

  return (
    <>
      <form className="search">
        <input
          className="search-input"
          autoComplete="off"
          placeholder="Accra,GH"
          onChange={(e) => {
            e.preventDefault();
            let input = e.target.value;
            setCity(input);
          }}
          value={city}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onSearch(city);
          }}
        >
          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle", fontSize: "2rem" },
              className: "search-icon",
            }}
          >
            <IoSearchOutline />
          </IconContext.Provider>
        </button>
      </form>
    </>
  );
};

export default SelectCity;
