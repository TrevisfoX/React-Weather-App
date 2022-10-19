import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCoordsOperation } from "../../../features/coordinates/coordinatesApi";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchForm.module.scss";

const SearchForm = () => {
	const dispatch = useDispatch();
	const [city, setCity] = useState("");

	const onHandlerSubmit = (e) => {
		e.preventDefault();
		dispatch(getCoordsOperation(city));
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
				className={style.input}
				value={city}
				onChange={onHandlerChange}
			/>
			<button
				className={style.btn}
				type="submit"
				onClick={onHandlerSubmit}
			>
				<SearchIcon />
			</button>
		</form>
	);
};

export default SearchForm;
