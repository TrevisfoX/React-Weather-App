import React from "react";

import style from "./DailyWeatherItem.module.scss";

const DailyWeatherItem = ({ dailyWeatherItem }) => {
	const { date, description, icon, max, min } = dailyWeatherItem;
	return (
		<div className={style.daily_card}>
			<h1 className={style.title}>{date}</h1>
			<img
				src={`${process.env.REACT_APP_IMAGE_BASE_URL}${icon}@2x.png`}
				alt={description}
				className={style.icon}
				width={100}
				height={100}
			/>
			<div className={style.limits}>
				<div className={style.min_limit}>
					<p>min</p>
					<p>{min} &#8451;</p>
				</div>
				<div className={style.max_limit}>
					<p>max</p>
					<p>{max} &#8451;</p>
				</div>
			</div>
		</div>
	);
};

export default DailyWeatherItem;
