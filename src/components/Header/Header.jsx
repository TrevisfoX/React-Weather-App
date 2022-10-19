import GeolocationButton from "../UI/GeolocationButton/GeolocationButton";
import SearchForm from "../UI/SearchForm/SearchForm";
import style from "./Header.module.scss";

const Header = () => {
	return (
		<div className={style.header}>
			<SearchForm />
			<GeolocationButton />
		</div>
	);
};

export default Header;
