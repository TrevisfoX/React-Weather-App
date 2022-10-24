import React from "react";
import { useSelector } from "react-redux";

import style from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
	const currentWeatherData = useSelector((state) => state.coords);
	const {
		name,
		country,
		temp: { temp },
		icon,
		description,
	} = currentWeatherData;

	return (
		<div className={style.current}>
			<h2 className={style.city}>
				{name}, {country}
			</h2>
			<h2 className={style.temp}>{temp} &#8451;</h2>
			<img
				src={`${process.env.REACT_APP_IMAGE_BASE_URL}${icon}@2x.png`}
				alt={description}
			/>
		</div>
	);
};

export default CurrentWeather;
