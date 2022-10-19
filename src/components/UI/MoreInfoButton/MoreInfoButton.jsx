import React from "react";
import style from "./MoreInfoButton.module.scss";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const MoreInfoButton = ({ moreInfo }) => {
	return (
		<button className={style.button} onClick={moreInfo}>
			<KeyboardDoubleArrowDownIcon className={style.icon} />
		</button>
	);
};

export default MoreInfoButton;
