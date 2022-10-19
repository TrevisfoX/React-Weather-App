import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { getCoordsOperation } from "./features/coordinates/coordinatesApi";
import { weatherOperation } from "./features/weather/weatherApi";

function App() {
	const dispatch = useDispatch();
	const coord = useSelector((state) => state.coords);

	useEffect(() => {
		if (Object.keys(coord).length === 0)
			dispatch(getCoordsOperation("Kyiv"));
		else dispatch(weatherOperation(coord));
	}, [dispatch, coord]);

	return (
		<div className={style.container}>
			<Header />
			<Main />
		</div>
	);
}

export default App;
