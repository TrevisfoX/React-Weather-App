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
			<div className="main-info">
				{weatherData?.main ? (
					<div>
						<h1 className="city-name">{weatherData?.name}</h1>
						<h2 className="temperature">
							{weatherData?.main?.temp.toFixed()}{" "}
							{units === "metric" ? "C" : "F"}&#176;{" "}
						</h2>
					</div>
				) : (
					""
				)}
				<div className="date-container">
					<p>
						{weatherData?.main
							? `${days[date?.getDay()]}, ${date?.getDate()}`
							: ""}
					</p>
					<p>
						{weatherData?.main
							? `${date?.getHours()}:
						${date?.getMinutes() / 10 < 1 ? "0" : ""}
						${date?.getMinutes()}`
							: ""}
					</p>
				</div>
			</div>
			<div className="icon-block">
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
