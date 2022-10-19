import React from "react";
import style from "./DailyWeatherItem.module.scss";
import { days, month } from "../../../db/db";
import MoreInfoButton from "../../UI/MoreInfoButton/MoreInfoButton";

const DailyWeatherItem = ({ item, moreInfo }) => {
	const day = days[new Date(item.dt * 1000).getDay()];
	const fullDate = new Date(item.dt * 1000).toLocaleString().slice(0, 2);
	const x = month[new Date(item.dt * 1000).getMonth()];

	return (
		<div className={style.dailyBlock}>
			<h1 className={style.title}>
				{day}, {fullDate} {x}
			</h1>
			<h2 className={style.temp}>{item.temp.day} &#8451;</h2>
			<img
				src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
				alt="Weather icon"
				className={style.icon}
				width={100}
				height={100}
			/>
			<div className={style.limits}>
				<div className={style.min_limit}>
					<p>min</p>
					<p>{item.temp.min} &#8451;</p>
				</div>
				<div className={style.max_limit}>
					<p>max</p>
					<p>{item.temp.max} &#8451;</p>
				</div>
			</div>

			<MoreInfoButton moreInfo={moreInfo} />
		</div>
	);
};

export default DailyWeatherItem;
