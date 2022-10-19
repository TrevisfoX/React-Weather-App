import axios from "axios";
import { addSearchCoordAction } from "./coordinatesReducer";

export const getCoordsOperation = (city) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`${process.env.REACT_APP_COORDINATES_BASE_URL}q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
		);
		const {
			coord,
			weather,
			main: { temp, feels_like, temp_min, temp_max, humidity },
			visibility,
			wind,
			dt,
			sys,
			name,
			id,
		} = data;
		dispatch(
			addSearchCoordAction({
				...coord,
				description: weather[0].description,
				weatherIcon: weather[0].icon,
				temp,
				feels_like,
				temp_min,
				temp_max,
				humidity,
				visibility,
				...wind,
				dt,
				...sys,
				name,
				id,
			})
		);
	} catch (error) {
		console.log(error);
	}
};
