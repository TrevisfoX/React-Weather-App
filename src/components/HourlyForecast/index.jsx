import React from "react";
import "./style.scss";

const HourlyForecast = ({
	weatherData = null,
	weatherDataHourly = null,
	units,
	h,
}) => {
	const time = new Date(weatherDataHourly?.hourly[h]?.dt * 1000);
	const weatherHourly = weatherDataHourly?.hourly[h];

	return (
		<>
			{weatherData && (
				<div className="hourly-forecast-item">
					<h3 className="hourly-forecast-item__time">
						{time?.getHours()}:0{time?.getMinutes()}
					</h3>
					<img
						src={`http://openweathermap.org/img/wn/${weatherHourly?.weather[0].icon}@2x.png`}
						alt="Weather icon"
						className="hourly-forecast-item__icon"
					/>
					<h3 className="hourly-forecast-item__temperature">
						{weatherHourly?.temp.toFixed()}{" "}
						{units === "metric" ? "C" : "F"}
						&#176;{" "}
					</h3>
				</div>
			)}
		</>
	);
};

export default HourlyForecast;
