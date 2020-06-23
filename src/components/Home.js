import React from 'react';
import { Link } from 'react-router-dom';
import SavedCard from './SavedCard';
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
						<img alt="slack-img" src={slackImg} />
						<p>Slack</p>
					</Link>
				</div>
			</div>
			<div className="home-flex-container">
				<div className="home-flex-column">
					<h4 className="card-title">What is Talon?</h4>
					<div className="about-card card">
						<p className="about-card-title">About Talon</p>
						<p className="about-card-description">
							Talon is a cross platform application by <span>Peroxaan Studios</span> that let's you manage
							and interact with webhooks for various services with ease.
						</p>
						<button className="btn about-card-btn">Learn More</button>
						<button className="btn about-card-btn">Twitter</button>
					</div>
				</div>
				<div className="home-flex-column">
					<h4 className="card-title">
						Saved Webhooks <span>(2)</span>
					</h4>
					{/* <p className="no-saved-message">You currently do not have any saved Webhooks.</p> */}
					<SavedCard
						title="Discord Webhook #1"
						img={discordImg}
						url="https://discordapp.com/api/webhooks/72440975833..."
					/>
					<SavedCard
						title="Slack Webhook #1"
						img={slackImg}
						url="https://hooks.slack.com/services/7244097583330100..."
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
