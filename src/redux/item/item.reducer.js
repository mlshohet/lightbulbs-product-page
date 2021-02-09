import ItemActionTypes from './item.types';

import { increaseQuantity } from './item.utils';
import { decreaseQuantity } from './item.utils';

import LIGHTBULB_DATA from './lightbulb-data';

const INITIAL_STATE = {
	lightbulb: LIGHTBULB_DATA
}

const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ItemActionTypes.INCREASE_QUANTITY:
			return {
				...state,
				lightbulb: increaseQuantity(state.lightbulb)
			}
		case ItemActionTypes.DECREASE_QUANTITY:
			return {
				...state,
				lightbulb: decreaseQuantity(state.lightbulb)
			}
		default:
			return state;
	}
}

export default itemReducer;


