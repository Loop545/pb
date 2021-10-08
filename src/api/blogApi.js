import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://box2351.temp.domains/~pbghetto/wp-json/wp/v2/blog';

export function getblogs() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}

// export function saveCourse(course) {
// 	return fetch(baseUrl + (course.id || ''), {
// 		method: course.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
// 		headers: { 'content-type': 'application/json' },
// 		body: JSON.stringify(course),
// 	})
// 		.then(handleResponse)
// 		.catch(handleError);
// }

// export function deleteCourse(courseId) {
// 	return fetch(baseUrl + courseId, { method: 'DELETE' })
// 		.then(handleResponse)
// 		.catch(handleError);
// }
