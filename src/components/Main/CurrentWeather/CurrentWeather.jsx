import React from "react";
import { useSelector } from "react-redux";
import style from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
	const weatherData = useSelector((state) => state.coords);

	return (
		<div className={style.current_block}>
			<h2 className={style.city}>
				{weatherData.name}, {weatherData.country}
			</h2>
			<h2 className={style.temp}>
				{Math.round(weatherData.temp)} &#8451;
			</h2>
			<img
				src={`${process.env.REACT_APP_IMAGE_BASE_URL}${weatherData.weatherIcon}@2x.png`}
				alt="Weather icon"
			/>
		</div>
	);
};

export default CurrentWeather;
