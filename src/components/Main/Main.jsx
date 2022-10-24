import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { Transition } from "react-transition-group";

import tempConverter from "../../utils/converters/tempConverter";
import timeConverter from "../../utils/converters/timeConverter";

import { duration, defaultStyle, transitionStyles } from "../../db/db";

import CurrentWeather from "./CurrentWeather/CurrentWeather";
import DailyWeatherList from "./DailyWeatherList/DailyWeatherList";
import HourlyWeatherList from "./HourlyWeatherList/HourlyWeatherList";
import MoreInfoButton from "../UI/MoreInfoButton/MoreInfoButton";
import style from "./Main.module.scss";

const Main = () => {
	const dailyWeatherData = useSelector((state) => state.weather.daily);
	const hourlyWeatherData = useSelector((state) => state.weather.hourly);

	const [toggle, setToggle] = useState(false);

	const nodeRef = useRef(null);

	const filteredDailyWeatherData = dailyWeatherData
		.slice(0, 7)
		.map(({ dt, temp, weather }) => {
			const convertedTime = timeConverter(dt);
			const convertedTemp = tempConverter(temp);
			return {
				dt: dt,
				...convertedTemp,
				...convertedTime,
				icon: weather[0].icon,
				description: weather[0].description,
			};
		});

	const filteredHourlyWeatherData = hourlyWeatherData
		.slice(0, 21)
		.map(
			({
				dt,
				temp,
				weather,
				pressure,
				humidity,
				visibility,
				feels_like,
				wind_speed,
			}) => {
				const convertedTime = timeConverter(dt);
				const convertedTemp = tempConverter(temp, feels_like);
				return {
					dt: dt,
					...convertedTemp,
					...convertedTime,
					icon: weather[0].icon,
					description: weather[0].description,
					pressure: `${pressure} hPa`,
					humidity: `${humidity} %`,
					visibility,
					wind_speed: `${wind_speed} m/s`,
				};
			}
		);

	const getHourlyWeatherData = () => setToggle(!toggle);

	return (
		<main className={style.main}>
			<CurrentWeather />
			<DailyWeatherList
				filteredDailyWeatherData={filteredDailyWeatherData}
			/>
			<MoreInfoButton getHourlyWeatherData={getHourlyWeatherData} />
			<Transition
				nodeRef={nodeRef}
				in={toggle}
				timeout={duration}
				unmountOnExit
			>
				{(state) => (
					<div
						ref={nodeRef}
						style={{
							...defaultStyle,
							...transitionStyles[state],
						}}
					>
						<HourlyWeatherList
							filteredHourlyWeatherData={
								filteredHourlyWeatherData
							}
						/>
					</div>
				)}
			</Transition>
		</main>
	);
};

export default Main;
