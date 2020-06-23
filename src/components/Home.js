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
					<div className="saved-card card">
						<img alt="discord-img" src={discordImg} />
						<div className="saved-card-contents">
							<h5 className="saved-card-title">Discord Webhook #1</h5>
							<p className="saved-card-url" title="">
								https://discordapp.com/api/webhooks/72440975833...
							</p>
							<button className="btn about-card-btn">View</button>
							<button className="btn about-card-btn">Remove</button>
						</div>
					</div>
					<div className="saved-card card">
						<img alt="discord-img" src={slackImg} />
						<div className="saved-card-contents">
							<h5 className="saved-card-title">Slack Webhook #1</h5>
							<p className="saved-card-url" title="">
								https://hooks.slack.com/services/7244097583330100...
							</p>
							<button className="btn about-card-btn">View</button>
							<button className="btn about-card-btn">Remove</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
