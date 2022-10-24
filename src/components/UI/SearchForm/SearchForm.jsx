import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";

import { coordsAPI } from "../../../redux/features/coordinates/coordinatesApi";
import style from "./SearchForm.module.scss";

const SearchForm = () => {
	const dispatch = useDispatch();
	const [city, setCity] = useState("");

	const onHandlerSubmit = (e) => {
		e.preventDefault();
		dispatch(coordsAPI(city));
		setCity("");
	};
	const onHandlerChange = (e) => {
		const { value } = e.target;
		setCity(value);
	};

	return (
		<form className={style.form}>
			<input
				type="text"
				placeholder="Search..."
				className={style.form_input}
				value={city}
				onChange={onHandlerChange}
			/>
			<button
				className={style.form_button}
				type="submit"
				onClick={onHandlerSubmit}
			>
				<SearchIcon />
			</button>
		</form>
	);
};

export default SearchForm;
