import React from "react";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import style from "./MoreInfoButton.module.scss";

const MoreInfoButton = ({ getHourlyWeatherData }) => {
	return (
		<div>
			<button
				className={style.hourly_button}
				onClick={getHourlyWeatherData}
				title="Get hourly weather"
			>
				<KeyboardDoubleArrowDownIcon className={style.hourly_icon} />
			</button>
		</div>
	);
};

export default MoreInfoButton;
