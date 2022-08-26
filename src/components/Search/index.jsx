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
		<form className="search-form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="search-form__input"
				placeholder="Search..."
			/>
			<button type="submit" className="search-form__submit">
				<FaSearch />
			</button>
		</form>
	);
};

export default Search;
