import React from "react";
// import "../css/ThemeToggler.scss";

const ThemeToggler = ({ toggler }) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={toggler} />
        <span className="round-slider"></span>
      </label>
    </>
  );
};

export default ThemeToggler;
