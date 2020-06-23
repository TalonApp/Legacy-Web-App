import React from 'react';

const SavedCard = (props) => {
	return (
		<div className="saved-card card">
			<img alt="service-img" src={props.img} />
			<div className="saved-card-contents">
				<h5 className="saved-card-title">{props.title}</h5>
				<p className="saved-card-url">{props.url}</p>
				<button className="btn about-card-btn">View</button>
				<button className="btn about-card-btn">Remove</button>
			</div>
		</div>
	);
};

export default SavedCard;
