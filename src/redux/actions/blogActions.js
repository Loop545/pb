import * as types from './actionTypes';
import * as blogApi from '../../api/blogApi';

export function loadBlogsSuccess(blogs) {
	return { type: types.LOAD_BLOGS_SUCCESS, blogs };
}

export function loadBlogs() {
	return function (dispatch) {
		return blogApi
			.getblogs()
			.then((blogs) => {
				dispatch(loadBlogsSuccess(blogs));
			})
			.catch((error) => {
				throw error;
			});
	};
}
