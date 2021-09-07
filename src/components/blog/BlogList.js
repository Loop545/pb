import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => (
	<div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg  mt-40'>
			{blogs.map((blog) => {
				return (
					<div class="flex justify-center flex-col mt-20">
						<div class="flex justify-center md:justify-end -mt-16">
							<img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
						</div>
						<div className='inline-block'>
							<h1 className='text-gray-800 text-3xl font-semibold'>
								<Link to={'/blogpage/' + blog.id}>{blog.title.rendered}</Link>
							</h1>
							<p>{blog.excerpt.rendered}</p>
						</div>
						<div className='flex'>
						<h3>{blog.acf.author}</h3>
						<label>{blog.type}</label>
						</div>
					</div>
					
				);
			})}
	</div>
);

BlogList.propTypes = {
	blogs: PropTypes.array.isRequired,
};

export default BlogList;
