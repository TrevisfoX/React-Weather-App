import { days, month } from "../../db/db";

export const timeConverter = (dt) => {
	const newDate = new Date(dt * 1000);
	return {
		date: `${days[newDate.getDay()]}, ${newDate
			.toLocaleString()
			.slice(0, 2)} ${month[newDate.getMonth()]}`,
		hours: `${newDate.getHours()}.00`,
	};
};

export default timeConverter;
