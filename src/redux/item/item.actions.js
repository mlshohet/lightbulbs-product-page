import ItemActionTypes from './item.types';

export const increaseQuantity = item => ({
	type: ItemActionTypes.INCREASE_QUANTITY
});

export const decreaseQuantity = item => ({
	type: ItemActionTypes.DECREASE_QUANTITY
})
