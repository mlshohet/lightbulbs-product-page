import { combineReducers } from 'redux';

import itemReducer from './item/item.reducer';
import specsReducer from './specs/specs.reducer';

export default combineReducers({
	item: itemReducer,
	specs: specsReducer
});