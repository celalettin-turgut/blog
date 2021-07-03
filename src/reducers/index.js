import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const reducer = combineReducers({
	counter: counterReducer,
	logged: loggedReducer,
});

export default reducer;
