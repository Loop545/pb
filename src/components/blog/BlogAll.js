import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Social from '../social/socailMedia';

function BlogAll(props) {
	const [blogs, setBlogs] = useState();

	useEffect(() => {
		const fetchBlogs = async () => {
			const response = await fetch(
				`http://localhost:7000/wp-json/wp/v2/blog/` + props.match.params.id,
			);
			const blogData = await response.json({});
			setBlogs(blogData);
		};
		fetchBlogs();
	}, []);

	return (
		<div className="blog md:container block mx-auto mt-20 p-24 shadow-lg border-1 rounded-lg">
			{blogs && (
				<div>
					<h2 className='font-bold'> {blogs.title.rendered}</h2>
					<div className='mb-8 mt-8'
						dangerouslySetInnerHTML={{ __html: blogs.content.rendered }}
					></div>
				</div>
			)}
			<div className='flex justify-between'>
			<button className='bg-black hover:bg-gray-dark text-white font-bold py-2 px-4 rounded'><Link to='/blogs'> Go back </Link></button>
			<Social/>
			</div>
		</div>
	);
}

export default BlogAll;
