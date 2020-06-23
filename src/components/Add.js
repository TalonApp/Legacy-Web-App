import React from 'react';
import discordImg from '../images/discord-lg.png';

const Add = () => {
	return (
		<div className="add-container">
			<div className="card add-card">
				<div className="add-card-heading">
					<img alt="service-img" src={discordImg} />
					<div className="add-card-heading-text">
						<h3>Setup Webhook</h3>
						<p>Add a discord webhook below.</p>
					</div>
				</div>
				<div className="add-card-body">
					<input type="text" placeholder="Webhook Name" />
					<input type="url" placeholder="Webhook URL" />
					<input type="text" placeholder="Override Username (optional)" />
					<input type="text" placeholder="Override Profile Pic (optional)" />
					<div className="add-card-btn-container">
						<button className="btn about-card-btn">Save & Use</button>
						<button className="btn about-card-btn">Back</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Add;
