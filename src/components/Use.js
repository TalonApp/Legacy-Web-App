import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import discordImg from '../images/discord-lg.png';
import slackImg from '../images/slack-lg.png';

const Use = (props) => {
	let history = useHistory();
	const [ webhook, setWebhook ] = useState(false);
	const [ messageToSend, setMessageToSend ] = useState('');
	const [ errMessage, setErrMessage ] = useState('');
	const [ successMessage, setSuccessMessage ] = useState('');

	useEffect(() => {
		let webhooks = localStorage.getItem('webhooks');
		if (!webhooks) {
			history.push('/');
		} else {
			let foundWebhook = JSON.parse(webhooks).filter((item) => item.id === props.match.params.id);
			if (foundWebhook.length) {
				setWebhook(foundWebhook[0]);
			} else {
				history.push('/');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSuccessMessage('');
		setErrMessage('');
		const sendMessage = async () => {
			if (webhook.type === 'discord') {
				let request = {
					content: messageToSend
				};
				if (webhook.username) {
					request.username = webhook.username;
				}
				if (webhook.profile) {
					request.avatar_url = webhook.profile;
				}
				try {
					let response = await axios.post(webhook.url, request);
					console.log(response);
					setSuccessMessage('Message Sent Successfully!');
					setMessageToSend('');
				} catch (err) {
					setErrMessage('Error Sending Message.');
				}
			}
		};
		sendMessage();
	};

	const handleChange = (e) => {
		setSuccessMessage('');
		setErrMessage('');
		setMessageToSend(e.target.value);
	};

	return (
		<div style={{ display: webhook ? '' : 'none' }} className="use-container">
			<div className="home-flex-container">
				<div className="home-flex-column">
					<div style={{ width: '350px' }} className="card add-card">
						<div style={{ textAlign: 'left' }} className="add-card-heading">
							<img alt="service-img" src={webhook.type === 'discord' ? discordImg : slackImg} />
							<div className="add-card-heading-text">
								<h3>Webhook Details</h3>
								<p>Find the webhook details below.</p>
							</div>
						</div>
						<div className="add-card-body">
							<p className="webhook-details-text">
								<strong>Webhook Name: </strong>
								{webhook.name}
							</p>
							<p title={webhook.url} className="webhook-details-text">
								<strong>Webhook URL: </strong>
								{webhook.url ? webhook.url.slice(0, 32) : ''}
								{webhook.url ? webhook.url.length > 32 ? '...' : '' : ''}
							</p>
							<div style={{ display: webhook.type === 'discord' ? '' : 'none' }}>
								<p className="webhook-details-text">
									<strong>Username Override: </strong>
									{webhook.username ? webhook.username : 'N/A'}
								</p>
								<p title={webhook.profile ? webhook.profile : ''} className="webhook-details-text">
									<strong>Profile Pic Override: </strong>
									{webhook.profile ? webhook.profile.slice(0, 29) : 'N/A'}
									{webhook.profile ? webhook.profile.length > 29 ? '...' : '' : ''}
								</p>
							</div>

							<div className="add-card-btn-container">
								<button
									type="button"
									onClick={() => history.push('/edit/' + webhook.id)}
									className="btn about-card-btn"
								>
									Edit Webhook
								</button>
								<button type="button" onClick={() => history.push('/')} className="btn about-card-btn">
									Back
								</button>
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
						<p className="err-message" style={{ marginTop: -20, display: errMessage ? '' : 'none' }}>
							{errMessage}
						</p>
						<p
							className="success-message"
							style={{ marginTop: -20, display: successMessage ? '' : 'none' }}
						>
							{successMessage}
						</p>
						<div className="add-card-body">
							<form onSubmit={handleSubmit}>
								<textarea
									onChange={handleChange}
									className="message-text-area"
									placeholder="Message Contents..."
									required
									value={messageToSend}
								/>
								<div className="add-card-btn-container">
									<button type="submit" className="btn about-card-btn">
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Use;
