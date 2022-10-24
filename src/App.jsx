import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { coordsAPI } from "./redux/features/coordinates/coordinatesApi";
import { weatherAPI } from "./redux/features/weather/weatherApi";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Loader from "./components/UI/Loader/Loader";
import style from "./App.module.scss";

const App = () => {
	const dispatch = useDispatch();
	const coords = useSelector((state) => state.coords);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		if (Object.values(coords).length === 0) {
			dispatch(coordsAPI("Kyiv"));
			setIsLoading(false);
		} else {
			dispatch(weatherAPI(coords));
		}
	}, [coords, dispatch]);

	return (
		<div className={style.app}>
			<Header />
			{isLoading ? <Main /> : <Loader />}
		</div>
	);
};

export default App;
