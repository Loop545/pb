import React from 'react';

import Image from '../static/img/pap.png'

// Styles
import './About.scss';

const About = () => {
	return (
		<div className='about-container'>
			<div className="2xl:container mx-auto ">
				<div className="grid grid-cols-1 md:grid-cols-2 h-screen">
				<div className="max-h-96 md:h-screen">
					<img className="w-screen h-screen object-cover object-top" src={Image} alt=""/>
				</div>
				<div className="flex bg-gray-100 p-10">
					<div className="mb-auto mt-auto max-w-lg">
					<h1 className="text-3xl uppercase">Jun Santilla</h1>
					<p className="font-semibold mb-5">Web Developer</p>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
					<a className="bg-black rounded-md py-3 px-7 mt-6 text-white" href='mailto:pap.bhandari409@gmail.com' target='#'>Email Me</a>
				</div>
				</div>
				</div>
			</div>
		</div>
	)
};
export default About;
