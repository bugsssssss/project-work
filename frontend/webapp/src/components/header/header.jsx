import styles from "./header.css";
export { Header };

function Header() {
	return (
		<header className="header__main">
			<div className="header__main__logo">
				<a href="">Logo</a>
			</div>
			<div className="header__main__search">
				<input type="text" placeholder="Search" />
			</div>
			<nav className="header__main__nav">
				<ul className="header__main__nav__list">
					<li className="header__main__nav__list__item">
						<a href="">Trending</a>
					</li>
					<li className="header__main__nav__list__item">
						<a href="">News</a>
					</li>
					<li className="header__main__nav__list__item">
						<a href="">Forum</a>
					</li>
					<li className="header__main__nav__list__item">
						<a href="">About us</a>
					</li>
				</ul>
			</nav>
			<div className="header__main__user not">
				<a href="" className="btn">
					Log in
				</a>
				<a href="" className="btn">
					Sign up
				</a>
			</div>
		</header>
	);
}
