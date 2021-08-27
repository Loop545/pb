import React, { useState } from 'react';

// Component
import { MenuToggle } from './menuToggle';
import Socail from './social';

// Styles
import '../../styles/index.scss';
import './mobileNav.scss';

// Routes
import { NavLink } from 'react-router-dom';

const MobileNavLinks = (props) => {
	const [isOpen, setOpen] = useState(false);
	const activeStyle = { color: '#F1342A' };
	return (
		<div className="nav-container">
			<h1>Menu</h1>
			<MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
			{isOpen && (
				<nav>
					<NavLink to="/" activeStyle={activeStyle} exact>
						Home
					</NavLink>
					<NavLink to="/blog" activeStyle={activeStyle}>
						Blog
					</NavLink>
					<NavLink to="/poem" activeStyle={activeStyle}>
						Poem
					</NavLink>
					<NavLink to="/connect" activeStyle={activeStyle}>
						Contact
					</NavLink>
					<NavLink to="/about" activeStyle={activeStyle}>
						About
					</NavLink>
					<Socail />
				</nav>
			)}
		</div>
	);
};
export default MobileNavLinks;
