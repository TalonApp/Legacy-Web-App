import React from 'react';
import { Link } from 'react-router-dom';
import discordImg from '../images/discord.png';
import slackImg from '../images/slack.png';

const Home = () => {
	return (
		<div className="home-container">
			<div className="card platform-card">
				<h5 className="platform-title">Select a platform below.</h5>
				<div className="platform-link-container">
					<Link className="platform-link" to="/add">
						<img alt="discord-img" src={discordImg} />
						<p>Discord</p>
					</Link>
					<Link className="platform-link" to="/add">
						<img alt="discord-img" src={slackImg} />
						<p>Slack</p>
					</Link>
				</div>
			</div>
			{/* <div className="home-flex-container">
				<div className="home-about-row">
					<div className="about-card card">
						<p>.</p>
					</div>
				</div>
				<div className="home-saved-row">
					<div className="saved-card card">
						<p>.</p>
					</div>
					<div className="saved-card card">
						<p>.</p>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Home;
