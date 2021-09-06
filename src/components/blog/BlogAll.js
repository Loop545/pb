import React, { useEffect, useState } from 'react';

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
		<div className="container block mx-auto px-24">
			{blogs && (
				<div>
					<h2> {blogs.title.rendered}</h2>
					<div
						dangerouslySetInnerHTML={{ __html: blogs.content.rendered }}
					></div>
				</div>
			)}
		</div>
	);
}

export default BlogAll;
