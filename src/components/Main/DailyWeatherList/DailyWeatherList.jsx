import React from "react";
import DailyWeatherItem from "../DailyWeatherItem/DailyWeatherItem";
import style from "./DailyWeatherList.module.scss";
import Slider from "react-slick";
import { settings } from "../../../db/db";

const DailyWeatherList = ({ dailyWeatherData, moreInfo }) => {
	return (
		<div className={style.mainDaily}>
			<Slider {...settings}>
				{dailyWeatherData.map((item) => {
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
