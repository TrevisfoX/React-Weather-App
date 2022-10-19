import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import style from "./GeolocationButton.module.scss";

const GeolocationButton = () => {
	const onHandlerGetLocation = () => {};
	return (
		<button onClick={onHandlerGetLocation} className={style.btn}>
			<LocationOnIcon />
		</button>
	);
};

export default GeolocationButton;
