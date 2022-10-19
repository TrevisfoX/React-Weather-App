import React from "react";
import style from "./HourlyWeatherItem.module.scss";
import CompressIcon from "@mui/icons-material/Compress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import AirIcon from "@mui/icons-material/Air";

const HourlyWeatherItem = ({ element }) => {
	const time = new Date(element.dt * 1000).getHours();

	return (
		<div className={style.hourly_block}>
			<h1 className={style.time}>{time}.00</h1>
			<h2 className={style.temp}>{element.temp} &#8451;</h2>
			<img
				src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
				alt="Weather icon"
				className={style.icon}
				width={100}
				height={100}
			/>
			<div className={style.further}>
				<p>
					<CompressIcon className={style.info_icon} />:
					<span>{element.pressure}</span>
				</p>
				<p>
					<FontAwesomeIcon
						icon={faDroplet}
						className={style.info_icon}
					/>
					: <span>{element.humidity}</span>
				</p>
				<p>
					<AirIcon className={style.info_icon} />:
					<span>{element.wind_speed}</span>
				</p>
			</div>
		</div>
	);
};

export default HourlyWeatherItem;
