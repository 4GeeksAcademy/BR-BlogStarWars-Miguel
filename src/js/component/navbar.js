import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/star-wars-logo-png-transparent.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={starWarsLogo} className="logo"></img>
				</span>
			</Link> */}
			<Link to="/">
				<img src={starWarsLogo} alt="Star Wars Logo" className="logo" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
