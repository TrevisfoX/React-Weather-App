import axios from "axios";
import { getHourlyWeather, getDailyWeather } from "./weatherSlice";

export const weatherAPI = ({ lat, lon }) => async (dispatch) => {
	try {
		const data = await axios.get(
			`${process.env.REACT_APP_WEATHER_BASE_URL}lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`
		);

		dispatch(getDailyWeather(data.data.daily));
		dispatch(getHourlyWeather(data.data.hourly));
	} catch (error) {
		console.log(error);
	}
};
