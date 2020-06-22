import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header-container">
			<Link className="header-link" to="/">
				<h1 className="header-title">Talon</h1>
				<h3 className="header-subtitle">Webhook Management Made Easy</h3>
			</Link>
		</div>
	);
};

export default Header;
