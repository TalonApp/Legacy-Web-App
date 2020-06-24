import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import discordImg from '../images/discord-lg.png';
import slackImg from '../images/slack-lg.png';

const Edit = (props) => {
	let history = useHistory();

	const [ webhook, setWebhook ] = useState(false);
	const [ webhookName, setWebhookName ] = useState('');
	const [ webhookUrl, setWebhookUrl ] = useState('');
	const [ overrideUsername, setOverrideUsername ] = useState('');
	const [ overrideProfilePic, setOverrideProfilePic ] = useState('');
	const [ errMessage, setErrMessage ] = useState('');
	const [ successMessage, setSuccessMessage ] = useState('');

	const reloadWebhook = () => {
		let webhooks = localStorage.getItem('webhooks');
		if (!webhooks) {
			history.push('/');
		} else {
			let foundWebhook = JSON.parse(webhooks).filter((item) => item.id === props.match.params.id);
			if (foundWebhook.length) {
				setWebhook(foundWebhook[0]);
				setWebhookName(foundWebhook[0].name);
				setWebhookUrl(foundWebhook[0].url);
				setOverrideUsername(foundWebhook[0].username || '');
				setOverrideProfilePic(foundWebhook[0].profile || '');
			} else {
				history.push('/');
			}
		}
	};

	useEffect(() => {
		reloadWebhook();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (e) => {
		setErrMessage('');
		setSuccessMessage('');
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
		setSuccessMessage('');
		let webhooks = JSON.parse(localStorage.getItem('webhooks'));
		if (webhooks.filter((item) => item.name === webhookName && item.name !== webhook.name).length) {
			setErrMessage('Webhook name is already in use.');
		} else {
			webhooks.forEach((item, i) => {
				if (item.id === webhook.id) {
					item.name = webhookName;
					item.url = webhookUrl;
					if (webhook.type === 'discord') {
						item.username = overrideUsername ? overrideUsername : false;
						item.profile = overrideProfilePic ? overrideProfilePic : false;
					}
					localStorage.setItem('webhooks', JSON.stringify(webhooks));
					setSuccessMessage('Changes saved successfully!');
					reloadWebhook();
					return;
				}
			});
		}
	};

	return (
		<div style={{ display: webhook ? '' : 'none' }} className="add-container">
			<div className="card add-card">
				<div className="add-card-heading">
					<img alt="service-img" src={webhook.type === 'discord' ? discordImg : slackImg} />
					<div className="add-card-heading-text">
						<h3>Edit Webhook</h3>
						<p>Edit the {webhook.type} webhook below.</p>
					</div>
				</div>
				<p className="err-message">{errMessage}</p>
				<p className="success-message">{successMessage}</p>
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
						<div style={{ display: webhook.type === 'discord' ? '' : 'none' }}>
							<input
								type="text"
								maxLength="20"
								value={overrideUsername}
								onChange={handleChange}
								name="overrideUsername"
								placeholder="Override Username (optional)"
							/>
							<input
								type="url"
								value={overrideProfilePic}
								onChange={handleChange}
								name="overrideProfilePic"
								placeholder="Override Profile Pic (optional)"
							/>
						</div>
						<div className="add-card-btn-container">
							<button type="submit" className="btn about-card-btn">
								Save Changes
							</button>
							<button
								type="button"
								onClick={() => history.push('/use/' + webhook.id)}
								className="btn about-card-btn"
							>
								Back
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Edit;
