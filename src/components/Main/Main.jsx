import React from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import { useSelector } from "react-redux";
import DailyWeatherList from "./DailyWeatherList/DailyWeatherList";
import HourlyWeatherList from "./HourlyWeatherList/HourlyWeatherList";
import style from "./Main.module.scss";

const Main = () => {
	const dailyWeatherData = useSelector((state) => state.weather.daily);
	const hourlyWeatherData = useSelector((state) => state.weather.hourly);

	return (
		<main className={style.main}>
			<CurrentWeather />
			<DailyWeatherList dailyWeatherData={dailyWeatherData} />
			<HourlyWeatherList hourlyWeatherData={hourlyWeatherData} />
		</main>
	);
};

export default Main;
