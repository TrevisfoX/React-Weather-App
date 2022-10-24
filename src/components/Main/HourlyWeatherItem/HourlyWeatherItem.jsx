import React from "react";

import CompressIcon from "@mui/icons-material/Compress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";

import style from "./HourlyWeatherItem.module.scss";

const HourlyWeatherItem = ({ hourlyWeatherItem }) => {
	const {
		hours,
		temp,
		icon,
		description,
		pressure,
		humidity,
		wind_speed,
		visibility,
	} = hourlyWeatherItem;

	return (
		<div className={style.hourly_card}>
			<h1 className={style.time}>{hours}</h1>
			<h2 className={style.temp}>{temp} &#8451;</h2>
			<img
				src={`${process.env.REACT_APP_IMAGE_BASE_URL}${icon}@2x.png`}
				alt={description}
				className={style.icon}
				width={100}
				height={100}
			/>
			<div className={style.further}>
				<p>
					<CompressIcon className={style.info_icon} />:
					<span>{pressure}</span>
				</p>
				<p>
					<FontAwesomeIcon
						icon={faDroplet}
						className={style.info_icon}
					/>
					: <span>{humidity}</span>
				</p>
				<p>
					<AirIcon className={style.info_icon} />:
					<span>{wind_speed}</span>
				</p>
				<p>
					<VisibilityIcon className={style.info_icon} />:
					<span>{visibility}</span>
				</p>
			</div>
		</div>
	);
};

export default HourlyWeatherItem;
