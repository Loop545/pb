import * as types from '../actions/actionTypes';

export default function poemReducer(state = [], action) {
	switch (action.type) {
		case types.LOAD_POEMS_SUCCESS:
			return action.poems;
		default:
			return state;
	}
}
