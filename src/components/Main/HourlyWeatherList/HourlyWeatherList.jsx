import React from "react";
import Slider from "react-slick";
import HourlyWeatherItem from "../HourlyWeatherItem/HourlyWeatherItem";
import { hourlySettings } from "../../../db/db";
import style from "./HourlyWeatherList.module.scss";

const HourlyWeatherList = ({ hourlyWeatherData, moreInfo }) => {
	return (
		<div className={style.hourly}>
			<Slider {...hourlySettings}>
				{hourlyWeatherData?.map((element) => {
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
