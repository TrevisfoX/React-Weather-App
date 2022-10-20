import React from "react";
import style from "./MoreInfoButton.module.scss";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const MoreInfoButton = ({ moreInfo, item }) => {
	return (
		<button className={style.button} onClick={moreInfo} id={item.dt}>
			<KeyboardDoubleArrowDownIcon className={style.icon} />
		</button>
	);
};

export default MoreInfoButton;
