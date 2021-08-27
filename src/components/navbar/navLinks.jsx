import React from 'react';
import '../../styles/index.scss';
import './Link.scss';
import { FiChevronsDown } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
	const activeStyle = { color: '#F1342A' };
	return (
		<nav>
			<NavLink to="/" activeStyle={activeStyle} exact>
				Home
			</NavLink>

			<div className="dropdown">
				<button className="dropbtn">
					Scribbles
					<FiChevronsDown size="1rem" />
				</button>
				<div className="dropdown-content">
					<NavLink to="/blog" activeStyle={activeStyle}>
						Blog
					</NavLink>

					<NavLink to="/poem" activeStyle={activeStyle}>
						Poem
					</NavLink>
				</div>
			</div>
			<NavLink to="/about" activeStyle={activeStyle}>
				About
			</NavLink>

			<NavLink to="/connect" activeStyle={activeStyle}>
				Contact
			</NavLink>
		</nav>
	);
};
export default Navlinks;
