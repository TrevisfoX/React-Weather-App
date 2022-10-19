import React from "react";
import DailyWeatherItem from "../DailyWeatherItem/DailyWeatherItem";
import style from "./DailyWeatherList.module.scss";
import Slider from "react-slick";
import { settings } from "../../../db/db";

const DailyWeatherList = ({ dailyWeatherData, moreInfo }) => {
	const daily = dailyWeatherData.slice(0, 7);

	return (
		<div className={style.mainDaily}>
			<Slider {...settings}>
				{daily.map((item) => {
					return (
						<DailyWeatherItem
							key={item.dt}
							item={item}
							moreInfo={moreInfo}
						/>
					);
				})}
			</Slider>
		</div>
	);
};

export default DailyWeatherList;
