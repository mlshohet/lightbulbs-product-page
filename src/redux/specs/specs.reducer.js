import CartActionTypes from './specs.types';

const INITIAL_STATE = {
	hidden: true
}

const specsReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CartActionTypes.TOGGLE_SPECS_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			}
		default:
			return state;
	}
}

export default specsReducer;