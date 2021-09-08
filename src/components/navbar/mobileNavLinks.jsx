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
			<MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
			{isOpen && (
				<nav>
					<NavLink to="/" activeStyle={activeStyle} exact>
						Home
					</NavLink>
					<NavLink to="/blogs" activeStyle={activeStyle}>
						Blog
					</NavLink>
					<NavLink to="/poems" activeStyle={activeStyle}>
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
