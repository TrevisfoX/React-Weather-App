import React from "react";
import Slider from "react-slick";
import HourlyWeatherItem from "../HourlyWeatherItem/HourlyWeatherItem";
import { hourlySettings } from "../../../db/db";
import style from "./HourlyWeatherList.module.scss";

const HourlyWeatherList = ({ hourlyWeatherData, moreInfo }) => {
	const hourlyData = hourlyWeatherData.slice(0, 12);
	return (
		<div className={style.hourly}>
			<Slider {...hourlySettings}>
				{hourlyData?.map((element) => {
					return (
						<HourlyWeatherItem
							key={element.dt}
							element={element}
							moreInfo={moreInfo}
						/>
					);
				})}
			</Slider>
		</div>
	);
};

export default HourlyWeatherList;
