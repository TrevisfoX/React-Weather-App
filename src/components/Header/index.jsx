import React from "react";
import Search from "../Search";
import ToggleMetricSystem from "../ToggleUnits";
import "./style.scss";
import logo from "../../assets/logo.png";

const Header = ({ units, setUnits, updateWeatherData }) => {
	return (
		<header className="header">
			<img src={logo} alt="Logo" className="header__logo" />
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
