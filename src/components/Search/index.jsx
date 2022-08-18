import React from "react";
import "./style.scss";
import search from "../../assets/magnifying-glass.png";

const Search = ({ updateWeatherData }) => {
	const handleSubmit = async (event) => {
		event.preventDefault();
		updateWeatherData(event.target[0].value);
		event.target[0].value = "";
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input type="text" className="form-input" placeholder="Search..." />
			<button type="submit" className="form-button">
				<img
					src={search}
					alt="Search button"
					className="form-button-image"
				/>
			</button>
		</form>
	);
};

export default Search;
