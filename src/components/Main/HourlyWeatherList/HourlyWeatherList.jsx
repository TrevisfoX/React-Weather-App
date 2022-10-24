import React from "react";
import Slider from "react-slick";

import { hourlySettings } from "../../../db/db";

import HourlyWeatherItem from "../HourlyWeatherItem/HourlyWeatherItem";
import style from "./HourlyWeatherList.module.scss";

const HourlyWeatherList = ({ filteredHourlyWeatherData }) => {
	return (
		<div className={style.hourly}>
			<Slider {...hourlySettings}>
				{filteredHourlyWeatherData?.map((hourlyWeatherItem) => {
					return (
						<HourlyWeatherItem
							key={hourlyWeatherItem.dt}
							hourlyWeatherItem={hourlyWeatherItem}
						/>
					);
				})}
			</Slider>
		</div>
	);
};

export default HourlyWeatherList;
