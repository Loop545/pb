import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
		<div className=" blog md:container block mx-auto px-24 mt-6">
			{blogs && (
				<div>
					<h2 className='font-bold'> {blogs.title.rendered}</h2>
					<div className='mb-8 mt-8'
						dangerouslySetInnerHTML={{ __html: blogs.content.rendered }}
					></div>
				</div>
			)}
			<button className='bg-black hover:bg-gray-dark text-white font-bold py-2 px-4 rounded'><Link to='/blogs'> Go back </Link></button>
		</div>
	);
}

export default BlogAll;
