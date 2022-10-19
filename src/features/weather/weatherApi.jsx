import axios from "axios";
import { getHourlyWeather, getDailyWeather } from "./weatherSlice";

export const weatherOperation = ({ lat, lon }) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`
		);

		dispatch(getDailyWeather(data.daily));
		dispatch(getHourlyWeather(data.hourly));
	} catch (error) {
		console.log(error);
	}
};