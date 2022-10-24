import SearchForm from "../UI/SearchForm/SearchForm";

import style from "./Header.module.scss";

const Header = () => {
	return (
		<header className={style.header}>
			<SearchForm />
		</header>
	);
};

export default Header;
