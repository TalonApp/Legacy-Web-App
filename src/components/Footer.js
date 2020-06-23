import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="footer-section">
			<p>
				&copy; Talon {year} by{' '}
				<a className="hidden-link" href="https://peroxaan.com/">
					<strong>Peroxaan Studios</strong>
				</a>{' '}
				|{' '}
				<a className="mode-switcher-link" href="/">
					Dark
				</a>{' '}
				-{' '}
				<a className="mode-switcher-link" href="/">
					Light
				</a>
			</p>
		</div>
	);
};

export default Footer;
