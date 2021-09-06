import { combineReducers } from 'redux';
import blogs from './blogReducer';
import poems from './poemReducer';

const rootReducer = combineReducers({
	blogs: blogs,
	poems: poems,
});
export default rootReducer;
