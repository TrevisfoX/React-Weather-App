import axios from "axios";

import tempConverter from "../../../utils/converters/tempConverter";

import { getCoordsAction } from "./coordinatesReducer";

export const coordsAPI = (city) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`${process.env.REACT_APP_COORDINATES_BASE_URL}q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
		);
		const {
			coord,
			name,
			sys: { country },
			main: { temp },
			weather,
		} = data;
		dispatch(
			getCoordsAction({
				...coord,
				name,
				country,
				temp: tempConverter(temp),
				icon: weather[0].icon,
				description: weather[0].description,
			})
		);
	} catch (error) {
		console.log(error);
	}
};
