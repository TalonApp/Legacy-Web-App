import React, { useState } from 'react';
import discordImg from '../images/discord-lg.png';
import slackImg from '../images/slack-lg.png';

const Edit = (props) => {
	const [ serviceType ] = useState('discord');

	return (
		<div className="add-container">
			<div className="card add-card">
				<div className="add-card-heading">
					<img alt="service-img" src={serviceType === 'discord' ? discordImg : slackImg} />
					<div className="add-card-heading-text">
						<h3>Edit Webhook</h3>
						<p>Edit the {serviceType} webhook below.</p>
					</div>
				</div>
				<div className="add-card-body">
					<input type="text" value="Discord Webhook #1" placeholder="Webhook Name" />
					<input
						type="url"
						value="https://discordapp.com/api/webhooks/72440975833..."
						placeholder="Webhook URL"
					/>
					<div style={{ display: serviceType === 'discord' ? '' : 'none' }}>
						<input type="text" placeholder="Override Username (optional)" />
						<input type="text" placeholder="Override Profile Pic (optional)" />
					</div>
					<div className="add-card-btn-container">
						<button className="btn about-card-btn">Save Changes</button>
						<button className="btn about-card-btn">Back</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Edit;
