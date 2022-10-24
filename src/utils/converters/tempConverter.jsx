const tempConverter = (temp, feels_like) => {
	const roundedValue = (data) => Math.round(data);
	if (temp.min && temp.max) {
		const { min, max } = temp;
		return {
			min: roundedValue(min),
			max: roundedValue(max),
		};
	} else {
		return {
			temp: roundedValue(temp),
			feels_like: roundedValue(feels_like),
		};
	}
};

export default tempConverter;
