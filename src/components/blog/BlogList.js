import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => (
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
			{blogs.map((blog) => {
				return (
					<tr key={blog.id}>
						<td>
							<a
								className="btn btn-light"
								href={'http://localhost:3000/newblogs/' + blog.slug}
							>
								Watch
							</a>
						</td>
						<td>
							<Link to={'/newblog/' + blog.id}>{blog.title.rendered}</Link>
						</td>
						<td>{blog.acf.author}</td>
						<td>{blog.type}</td>
					</tr>
				);
			})}
		</tbody>
	</table>
);

BlogList.propTypes = {
	blogs: PropTypes.array.isRequired,
};

export default BlogList;
