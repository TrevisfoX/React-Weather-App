import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import "weather-icons/css/weather-icons.css";

const appId = "348d1a1ae88f5ceb7b6797a0de54ffc2";
const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function App() {
	const [weatherData, setWeatherData] = useState(null);
	const [weatherDataHourly, setWeatherDataHourly] = useState(null);
	const [units, setUnits] = useState("metric");
	const [date, setDate] = useState(null);

	const fetchWeatherHourly = (lon, lat) => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};
		return fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=${appId}&units=${units}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => result);
	};

	const fetchWeather = (city) => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};
		return fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}`,
			requestOptions
		)
			.then((response) => response.json())
			.then(async (result) => {
				setWeatherDataHourly(
					await fetchWeatherHourly(result.coord.lon, result.coord.lat)
				);
				return result;
			});
	};

	const updateWeatherData = async (city) => {
		setWeatherData(await fetchWeather(city));
	};

	useEffect(() => {
		if (weatherData) {
			updateWeatherData(weatherData?.name);
		}
	}, [units]);

	useEffect(() => {
		if (weatherData) {
			setDate(new Date(weatherData?.dt * 1000));
		}
	}, [weatherData]);
	return (
		<div className="App">
			<div className="container">
				<Header
					setWeatherData={setWeatherData}
					fetchWeather={fetchWeather}
					updateWeatherData={updateWeatherData}
					units={units}
					setUnits={setUnits}
				/>
				{!weatherData && (
					<div className="title">
						<h1>Enter the city</h1>
					</div>
				)}
				{weatherData && (
					<Main
						weatherData={weatherData}
						weatherDataHourly={weatherDataHourly}
						setDate={setDate}
						units={units}
						date={date}
						days={days}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
