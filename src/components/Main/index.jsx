import { useEffect } from "react";
import "./style.scss";

const Main = ({ weatherData = null, units, days, setDate, date }) => {
	useEffect(() => {
		if (weatherData) {
			setDate(new Date(weatherData?.dt * 1000));
		}
	}, [weatherData]);

	return (
		<main className="main-wrapper">
			<div>
				{weatherData?.main ? (
					<div>
						<h2 className="city-name">{weatherData?.name}</h2>
						<h3 className="temperature">
							{weatherData?.main?.temp.toFixed()}{" "}
							{units === "metric" ? "C" : "F"}&#176;{" "}
						</h3>
						{/* <div className="min-max-temp">
							<h3 className="min-temp">
								{weatherData?.main?.temp_min.toFixed()}{" "}
								{units === "metric" ? "C" : "F"}&#176;{" "}
							</h3>
							<h3 className="max-temp">
								{weatherData?.main?.temp_max.toFixed()}{" "}
								{units === "metric" ? "C" : "F"}&#176;{" "}
							</h3>
						</div> */}
					</div>
				) : (
					""
				)}
				<div className="date-container">
					<p>
						{weatherData?.main
							? `${days[date?.getDay()]}, ${date?.getDate()}`
							: "The city was not chosen"}
					</p>
				</div>
			</div>
		</main>
	);
};

export default Main;
