import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios'


const BlogList = ({ blogs }) => (
	<div className='container mx-auto  p-10 bg-white'>
			{blogs.map((blog) => {
				return (
					<div class="flex justify-center flex-col p-6 mt-12 shadow-lg border-1 rounded-lg">
						<div class="flex justify-center md:justify-end -mt-16">
							<img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
						</div>
						<div className='inline-block'>
							<h1 className=' title mb-1 text-gray-800 text-3xl font-semibold'>
								{blog.title.rendered}
							</h1>
							<div dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}/>
						</div>
						<div className='flex justify-between mt-1'>
							<h3 className=''> Author: {blog.acf.author}</h3>
							<label className=''>Type:{blog.type}</label>
						</div>
						<button className='bg-black hover:bg-gray-dark text-white font-bold py-2 px-4 mt-2 w-24 rounded'>
							<Link to={'/blogpage/' + blog.id} className='text-xs py-0'>Read More</Link>
						</button>
					</div>
					
				);
			})}
	</div>
);

BlogList.propTypes = {
	blogs: PropTypes.array.isRequired,
};

export default BlogList;
