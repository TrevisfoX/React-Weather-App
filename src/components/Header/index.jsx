import React from "react";
import Search from "../Search";
import ToggleMetricSystem from "../ToggleUnits";
import "./style.scss";

const Header = ({ units, setUnits, updateWeatherData }) => {
  return (
    <header className="header">
      <Search units={units} updateWeatherData={updateWeatherData} />
      <ToggleMetricSystem
        units={units}
        setUnits={setUnits}
        updateWeatherData={updateWeatherData}
      />
    </header>
  );
};

export default Header;
