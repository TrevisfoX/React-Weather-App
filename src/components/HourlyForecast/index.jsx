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
		<div>
			{weatherData && (
				<div className="weather-hourly">
					<h3>
						{time?.getHours()}:0{time?.getMinutes()}
					</h3>
					<div>
						<img
							src={`http://openweathermap.org/img/wn/${weatherHourly?.weather[0].icon}@2x.png`}
							alt=""
						/>
					</div>
					<h3>
						{weatherHourly?.temp.toFixed()}{" "}
						{units === "metric" ? "C" : "F"}
						&#176;{" "}
					</h3>
				</div>
			)}
		</div>
	);
};

export default HourlyForecast;
