import React from 'react';

import ItemContainer from '../../components/item-container/item-container.component';
import Suggestions from '../../components/suggestions-container/suggestions-container.component';
import ButtonPrime from  '../../components/button-prime/button-prime.component';

import './product-page.styles.scss';

const ProductPage = () => {
	return (
			<div className="product-page">
				<ItemContainer />
				<Suggestions />
				<div className="button-container">
					<ButtonPrime 
						ways 
						type="button"
					>
						View more ways to save energy &#10095;&#10095;
					</ButtonPrime>
				</div>

			</div>
		);
}

export default ProductPage;



