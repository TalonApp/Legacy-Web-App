import React from 'react';

const Footer = (props) => {
	const year = new Date().getFullYear();

	const handleClick = (e) => {
		e.preventDefault();
		switch (e.target.name) {
			case 'light':
				localStorage.setItem('darkmode', 'false');
				props.setDarkMode(false);
				break;
			case 'dark':
				localStorage.setItem('darkmode', 'true');
				props.setDarkMode(true);
				break;
			default:
				break;
		}
	};

	return (
		<div className="footer-section">
			<p>
				&copy; Talon {year} by{' '}
				<a className="hidden-link" href="https://peroxaan.com/">
					<strong>Peroxaan Studios</strong>
				</a>{' '}
				|{' '}
				<a className="mode-switcher-link" name="light" onClick={handleClick} href="/">
					Light
				</a>{' '}
				-{' '}
				<a className="mode-switcher-link" name="dark" onClick={handleClick} href="/">
					Dark
				</a>
			</p>
		</div>
	);
};

export default Footer;
