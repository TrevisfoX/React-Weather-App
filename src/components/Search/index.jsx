import React from "react";
import "./style.scss";
import { FaSearch } from "react-icons/fa";

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
				<FaSearch />
			</button>
		</form>
	);
};

export default Search;
