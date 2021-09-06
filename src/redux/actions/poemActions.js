import * as types from './actionTypes';
import * as poemApi from '../../api/poemApi';

export function loadBlogsSuccess(poems) {
	return { type: types.LOAD_POEMS_SUCCESS, poems };
}

export function loadPoems() {
	return function (dispatch) {
		return poemApi
			.getpoems()
			.then((poems) => {
				dispatch(loadBlogsSuccess(poems));
			})
			.catch((error) => {
				throw error;
			});
	};
}
