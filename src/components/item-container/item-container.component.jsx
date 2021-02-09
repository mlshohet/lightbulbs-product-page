import React from 'react';
import { connect } from 'react-redux';

import { toggleSpecsHidden } from '../../redux/specs/specs.actions';
import { increaseQuantity } from '../../redux/item/item.actions';
import { decreaseQuantity } from '../../redux/item/item.actions';

import bulbImage from '../../assets/lightbulb.jpg';

import Specs from '../specs/specs.component';
import ButtonPrime from '../button-prime/button-prime.component';

import './item-container.styles.scss';

const ItemContainer = ({ 
		lightbulb,
		toggleSpecsHidden,
		increaseQuantity,
		decreaseQuantity,
		hidden 
	}) => {
	const { title, imageUrl, description, price, quantity } = lightbulb;
	return (
		<div className="content">
			<div className="item-container">
				<div className="image-container">
					<img src={bulbImage} alt={title}/>
				</div>
				<div className="image-footer">
			 		<div className="title">{ title }</div>
			 		<div className="item-footer">

			 			<div className="upper-row">
					 		<div className="price">${ price }</div>
					 		<div className="quantity">Quantity { quantity }</div>
					 		
					 	</div>
					 	<div className="lower-row">
				 			<div className="description">{ description }</div>
				 			<div className="button-container">
				 				<ButtonPrime
				 					type="button"
				 					onClick={
					 					quantity === 0 ?
					 					null : () => decreaseQuantity(lightbulb)
				 				}>
				 					-
				 				</ButtonPrime>
				 				<ButtonPrime
				 					type="button"
				 					onClick={
				 						() => increaseQuantity(lightbulb)
				 				}>
				 					+
				 				</ButtonPrime>
				 			</div>
				 		</div>

				 	</div>
				 	<div className="add-button-container">
				 		<ButtonPrime add type="button">Add to cart</ButtonPrime>
				 	</div>
				</div>
			</div>
			<div className="more-details-container">
				<div className="more-details" onClick={toggleSpecsHidden}>
					MORE DETAILS
				</div>
			</div>
			{ hidden ? null : <Specs /> }
		</div>
	)
};

const mapStateToProps = ({ item: { lightbulb }, specs: { hidden } }) => ({
	lightbulb,
	hidden
});

const mapDispatchToProps = dispatch => ({
	toggleSpecsHidden: () => dispatch(toggleSpecsHidden()),
	increaseQuantity: () => dispatch(increaseQuantity()),
	decreaseQuantity: () => dispatch(decreaseQuantity())
})


export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);




