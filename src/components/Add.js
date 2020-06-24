import React, { useState } from 'react';
import randomstring from 'randomstring';
import { useHistory } from 'react-router-dom';
import discordImg from '../images/discord-lg.png';
import slackImg from '../images/slack-lg.png';

const Add = (props) => {
	let history = useHistory();
	const serviceType = props.match.params.type;

	const [ webhookName, setWebhookName ] = useState('');
	const [ webhookUrl, setWebhookUrl ] = useState('');
	const [ overrideUsername, setOverrideUsername ] = useState('');
	const [ overrideProfilePic, setOverrideProfilePic ] = useState('');
	const [ errMessage, setErrMessage ] = useState('');

	const handleChange = (e) => {
		setErrMessage('');
		switch (e.target.name) {
			case 'webhookName':
				setWebhookName(e.target.value);
				break;
			case 'webhookUrl':
				setWebhookUrl(e.target.value);
				break;
			case 'overrideUsername':
				setOverrideUsername(e.target.value);
				break;
			case 'overrideProfilePic':
				setOverrideProfilePic(e.target.value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrMessage('');
		let webhook = {
			name: webhookName,
			url: webhookUrl,
			type: serviceType,
			username: overrideUsername ? overrideUsername : false,
			profile: overrideProfilePic ? overrideProfilePic : false,
			id: randomstring.generate()
		};
		let webhooks = localStorage.getItem('webhooks');
		if (webhooks) {
			webhooks = JSON.parse(webhooks);
			if (!webhooks.some((item) => item.name === webhookName)) {
				webhooks.push(webhook);
				localStorage.setItem('webhooks', JSON.stringify(webhooks));
			} else {
				setErrMessage('Webhook name is already in use.');
				return;
			}
		} else {
			webhooks = [ webhook ];
			localStorage.setItem('webhooks', JSON.stringify(webhooks));
		}
		history.push('/use/' + webhook.id);
	};

	return (
		<div className="add-container">
			<div className="card add-card">
				<div className="add-card-heading">
					<img alt="service-img" src={serviceType === 'discord' ? discordImg : slackImg} />
					<div className="add-card-heading-text">
						<h3>Setup Webhook</h3>
						<p>Add a {serviceType} webhook below.</p>
					</div>
				</div>
				<p className="err-message">{errMessage}</p>
				<div className="add-card-body">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							maxLength="30"
							value={webhookName}
							onChange={handleChange}
							name="webhookName"
							placeholder="Webhook Name"
							required
						/>
						<input
							type="url"
							value={webhookUrl}
							onChange={handleChange}
							name="webhookUrl"
							placeholder="Webhook URL"
							required
						/>
						<div style={{ display: serviceType === 'discord' ? '' : 'none' }}>
							<input
								type="text"
								maxLength="20"
								value={overrideUsername}
								onChange={handleChange}
								name="overrideUsername"
								placeholder="Override Username (optional)"
							/>
							<input
								type="link"
								value={overrideProfilePic}
								onChange={handleChange}
								name="overrideProfilePic"
								placeholder="Override Profile Pic (optional)"
							/>
						</div>
						<div className="add-card-btn-container">
							<button type="submit" className="btn about-card-btn">
								Save & Use
							</button>
							<button type="button" onClick={() => history.push('/')} className="btn about-card-btn">
								Back
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Add;
