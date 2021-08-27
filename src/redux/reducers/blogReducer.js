import * as types from '../actions/actionTypes';

export default function blogReducer(state = [], action) {
	switch (action.type) {
		case types.LOAD_BLOGS_SUCCESS:
			return action.blogs;
		default:
			return state;
	}
}
