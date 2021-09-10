import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Social from '../social/socailMedia';

// Styles
import './poem.scss';

function PoemAll(props) {
	const [poems, setPoems] = useState();

	useEffect(() => {
		const fetchPoems = async () => {
			const response = await fetch(
				`http://localhost:7000/wp-json/wp/v2/poems/` + props.match.params.id,
			);
			const poemData = await response.json({});
			setPoems(poemData);
		};
		fetchPoems();
	}, [props.match.params.id]);

	return (
		<div className="poem-all md:container block mx-auto mt-20 p-24 shadow-lg border-1 rounded-lg">
			{poems && (
				<div>
					<h2 className='font-bold'> {poems.title.rendered}</h2>
					<div className='mb-8 mt-8'
						dangerouslySetInnerHTML={{ __html: poems.content.rendered }}
					></div>
				</div>
			)}
			<div className='bottom-container flex justify-between'>
			<button className='bg-black hover:bg-gray-dark text-white font-bold py-2 px-4 rounded'><Link to='/blogs'> Go back </Link></button>
			<Social/>
			</div>
		</div>
	);
}

export default PoemAll;
