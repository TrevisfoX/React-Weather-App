import { useEffect } from "react";
import HourlyForecast from "../HourlyForecast";
import "./style.scss";

const Main = ({
	weatherData = null,
	weatherDataHourly = null,
	units,
	days,
	setDate,
	date,
}) => {
	useEffect(() => {
		if (weatherData) {
			setDate(new Date(weatherData?.dt * 1000));
		}
	}, [weatherData]);

	return (
		<main className="main">
			<div className="base-info">
				<h1 className="base-info__city">{weatherData?.name}</h1>
				<h2 className="base-info__temperature">
					{weatherData?.main?.temp.toFixed()}{" "}
					{units === "metric" ? "C" : "F"}&#176;{" "}
				</h2>
				<p className="base-info__day">
					{weatherData?.main
						? `${days[date?.getDay()]}, ${date?.getDate()}`
						: ""}
				</p>
				<p className="base-info__time">
					{weatherData?.main
						? `${date?.getHours()}:
						${date?.getMinutes() / 10 < 1 ? "0" : ""}
						${date?.getMinutes()}`
						: ""}
				</p>
			</div>
			<div className="hourly-forecast">
				<HourlyForecast
					weatherData={weatherData}
					weatherDataHourly={weatherDataHourly}
					units={units}
					h={0}
					date={date}
				/>
				<HourlyForecast
					weatherData={weatherData}
					weatherDataHourly={weatherDataHourly}
					units={units}
					h={1}
					date={date}
				/>
				<HourlyForecast
					weatherData={weatherData}
					weatherDataHourly={weatherDataHourly}
					units={units}
					h={2}
					date={date}
				/>
				<HourlyForecast
					weatherData={weatherData}
					weatherDataHourly={weatherDataHourly}
					units={units}
					h={3}
					date={date}
				/>
				<HourlyForecast
					weatherData={weatherData}
					weatherDataHourly={weatherDataHourly}
					units={units}
					h={4}
					date={date}
				/>
				<HourlyForecast
					weatherData={weatherData}
					weatherDataHourly={weatherDataHourly}
					units={units}
					h={5}
					date={date}
				/>
			</div>
		</main>
	);
};

export default Main;
