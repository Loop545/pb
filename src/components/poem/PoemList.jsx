import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assest
import Image from '../../static/img/about2.jpg'

const PoemList = ({ poems }) => (
	<div className='container mx-auto  p-10 bg-white'>
			{poems.map((poem) => {
				return (
					<div class="flex justify-center flex-col p-6 mt-12 shadow-lg border-1 rounded-lg">
						<div class="flex justify-center md:justify-end -mt-16">
							<img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={Image} alt='img'/>
						</div>
						<div className='inline-block mb-2'>
							<h1 className=' title mb-1 text-gray-800 text-3xl font-semibold'>
								{poem.title.rendered}
							</h1>
							<div className='excerpt' dangerouslySetInnerHTML={{ __html: poem.excerpt.rendered }}/>
						</div>
						<div className='read-flex flex justify-between mt-1'>
							<h3 className=''> Author: {poem.acf.author}</h3>
							<label className='inline-block rounded-full text-white 
								bg-green-400 text-xs font-bold 
								mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
								opacity-90 hover:opacity-100'>{poem.type}
							</label>
						</div>
						<p>
							<Link to={'/poempage/' + poem.id} className='text-md py-0'>Read More</Link>
						</p>
					</div>
					
				);
			})}
	</div>
);

PoemList.propTypes = {
	poems: PropTypes.array.isRequired,
};

export default PoemList;
