import React from "react";
// import "../css/TemperatureToggler.scss";

const TemperatureToggler = ({ c, f, cf, cc }) => {
  return (
    <div className="temp-wrapper">
      <span className="toggler" style={{ color: cf }} onClick={f}>
        {`${String.fromCharCode(176)}F`}
      </span>
      <span> | </span>
      <span className="toggler" style={{ color: cc }} onClick={c}>
        {`${String.fromCharCode(176)}C`}
      </span>
    </div>
  );
};

export default TemperatureToggler;
