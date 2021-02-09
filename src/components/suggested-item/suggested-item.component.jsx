import React from 'react';

import './suggested-item.styles.scss';
import lightbulb from '../../assets/lightbulb.jpg';

const SuggestedItem = (item) => {
	const { title, imageUrl, price } = item;
	return (
		<div className="suggested-item">
			<div className="image-container">
				<img src={imageUrl} alt="lightbulb" />
			</div>
			<div className="footer">
				<span className="title">{title}</span>
				<span className="price">${price}</span>
			</div>
		</div>
	);
}

export default SuggestedItem;