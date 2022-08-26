import React from "react";
import "./style.scss";

const ToggleUnits = ({ units, setUnits }) => {
	const isCelcium = units === "metric";

	const toggleUnits = () => {
		setUnits(units === "metric" ? "imperial" : "metric");
	};

	return (
		<button onClick={toggleUnits} className="toggle-button">
			<p className={`${isCelcium && "bold"}`}>&#176;C</p>
			<span className="toggle-button__spacer">/</span>
			<p className={`${!isCelcium && "bold"}`}>&#176;F</p>
		</button>
	);
};

export default ToggleUnits;
