import React, { useEffect, useState } from 'react';

function PoemAll(props) {
	const [poems, setPoems] = useState();

	useEffect(() => {
		const fetchPoems = async () => {
			const response = await fetch(
				`http://localhost:7000/wp-json/wp/v2/poem/` + props.match.params.id,
			);
			const poemData = await response.json({});
			setPoems(poemData);
		};
		fetchPoems();
	}, []);

	return (
		<div className="container block mx-auto px-24">
			{poems && (
				<div>
					<h2> {poems.title.rendered}</h2>
					<div
						dangerouslySetInnerHTML={{ __html: poems.content.rendered }}
					></div>
				</div>
			)}
		</div>
	);
}

export default PoemAll;
