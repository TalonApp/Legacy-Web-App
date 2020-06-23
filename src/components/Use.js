import React from 'react';
import discordImg from '../images/discord-lg.png';

const Use = () => {
	return (
		<div className="use-container">
			<div className="home-flex-container">
				<div className="home-flex-column">
					<div style={{ width: '350px' }} className="card add-card">
						<div style={{ textAlign: 'left' }} className="add-card-heading">
							<img alt="service-img" src={discordImg} />
							<div className="add-card-heading-text">
								<h3>Webhook Details</h3>
								<p>Find the webhook details below.</p>
							</div>
						</div>
						<div className="add-card-body">
							<p className="webhook-details-text">
								<strong>Webhook Name: </strong>Discord Webhook #1
							</p>
							<p className="webhook-details-text">
								<strong>Webhook URL: </strong>https://discordapp.com/ap...
							</p>
							<p className="webhook-details-text">
								<strong>Username Override: </strong>N/A
							</p>
							<p className="webhook-details-text">
								<strong>Profile Pic Override: </strong>N/A
							</p>

							<div className="add-card-btn-container">
								<button className="btn about-card-btn">Edit Webhook</button>
								<button className="btn about-card-btn">Back</button>
							</div>
						</div>
					</div>
				</div>
				<div className="home-flex-column">
					<div style={{ width: '350px' }} className="card add-card">
						<div style={{ textAlign: 'left' }} className="add-card-heading">
							<div className="add-card-heading-text">
								<h3>Send Message</h3>
								<p>Send a message using this webhook.</p>
							</div>
						</div>
						<div className="add-card-body">
							<textarea className="message-text-area" placeholder="Message Contents..." />
							<div className="add-card-btn-container">
								<button className="btn about-card-btn">Send Message</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Use;
