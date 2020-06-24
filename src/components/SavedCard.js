import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SavedCard = (props) => {
	let history = useHistory();

	const [ removed, setRemoved ] = useState(false);

	const handleRemove = () => {
		setRemoved(true);
		setTimeout(() => {
			let webhooks = JSON.parse(localStorage.getItem('webhooks'));
			localStorage.setItem('webhooks', JSON.stringify(webhooks.filter((item) => item.id !== props.id)));
			props.reload();
		}, 1000);
	};

	return (
		<div className={`saved-card card ${removed ? 'removed-card' : ''}`}>
			<img alt="service-img" src={props.img} />
			<div className="saved-card-contents">
				<h5 className="saved-card-title">{props.title}</h5>
				<p title={props.url} className="saved-card-url">
					{props.url.slice(0, 50)}
					{props.url.length > 50 ? '...' : ''}
				</p>
				<button
					type="button"
					onClick={() => {
						history.push('/use/' + props.id);
					}}
					className="btn about-card-btn"
				>
					View
				</button>
				<button type="button" onClick={handleRemove} className="btn about-card-btn">
					Remove
				</button>
			</div>
		</div>
	);
};

export default SavedCard;
