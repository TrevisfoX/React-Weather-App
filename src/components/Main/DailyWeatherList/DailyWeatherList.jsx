import React from "react";

import DailyWeatherItem from "../DailyWeatherItem/DailyWeatherItem";
import style from "./DailyWeatherList.module.scss";

const DailyWeatherList = ({ filteredDailyWeatherData }) => {
	return (
		<div className={style.daily}>
			{filteredDailyWeatherData.map((dailyWeatherItem) => {
				return (
					<DailyWeatherItem
						key={dailyWeatherItem.dt}
						dailyWeatherItem={dailyWeatherItem}
					/>
				);
			})}
		</div>
	);
};

export default DailyWeatherList;
