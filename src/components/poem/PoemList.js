import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PoemList = ({ poems }) => (
	<table className="table" style={{ marginTop: '10rem' }}>
		<thead>
			<tr>
				<th />
				<th>Title</th>
				<th>Author</th>
				<th>Category</th>
			</tr>
		</thead>
		<tbody>
			{poems.map((poem) => {
				return (
					<tr key={poem.id}>
						<td>
							<a
								className="btn btn-light"
								href={'http://localhost:3000/poempage/' + poem.slug}
							>
								Watch
							</a>
						</td>
						<td>
							<Link to={'/poempage/' + poem.id}>{poem.title.rendered}</Link>
						</td>
						<td>{poem.acf.author}</td>
						<td>{poem.type}</td>
					</tr>
				);
			})}
		</tbody>
	</table>
);

PoemList.propTypes = {
	poems: PropTypes.array.isRequired,
};

export default PoemList;
