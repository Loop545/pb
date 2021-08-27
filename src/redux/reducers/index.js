import { combineReducers } from 'redux';
import blogs from './blogReducer';

const rootReducer = combineReducers({
	blogs: blogs,
});
export default rootReducer;
