import React, { Component } from 'react';

import Poem from '../components/Poem';

import './Poem.scss';

const Poems = () => {
	return (
		<div className="poem-container">
			<h1>Poems</h1>
			<Poem />
		</div>
	);
};
export default Poems;
