import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import { useSelector } from "react-redux";
import DailyWeatherList from "./DailyWeatherList/DailyWeatherList";
import HourlyWeatherList from "./HourlyWeatherList/HourlyWeatherList";
import style from "./Main.module.scss";

const Main = () => {
	const [state, setState] = useState();
	const dailyWeatherData = useSelector((state) => state.weather.daily);
	const hourlyWeatherData = useSelector((state) => state.weather.hourly);

	useEffect(() => {
		if (dailyWeatherData && hourlyWeatherData) {
			setState((prevState) => ({
				...prevState,
				dailyWeatherData,
				hourlyWeatherData,
			}));
		}
	}, [hourlyWeatherData, dailyWeatherData]);

	const moreInfo = (e) => {
		const { id } = e.target;
		const filtered = state?.hourlyWeatherData.filter(({ dt }) => dt === id);
		setState((prevState) => ({
			...prevState,
			filtered,
		}));
	};

	return (
		<main className={style.main}>
			<CurrentWeather />
			<DailyWeatherList
				dailyWeatherData={dailyWeatherData}
				moreInfo={moreInfo}
			/>
			{state?.filtered && (
				<HourlyWeatherList hourlyWeatherData={hourlyWeatherData} />
			)}
		</main>
	);
};

export default Main;
