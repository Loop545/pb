import React from 'react'
import { NavLink } from 'react-router-dom';

// Styles
import './cornerNav.scss'

const cornerNav = () => {
    const activeStyle = { color: '#F1342A' };
    return (
        <>
        <div className='corner topleft'>
            <ul>
                <li className="active">Scribbles
                    <ul className="hidden">
                        <li><NavLink to="/blogs" activeStyle={activeStyle} className="inactive">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/poems" activeStyle={activeStyle} className="inactive">
                                Poem
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className='corner topright'>
            	<NavLink to="/" activeStyle={activeStyle} exact>
                    Home
                </NavLink>
        </div>
        <div className="corner bottomleft">
            <NavLink to="/about" activeStyle={activeStyle}>
				About
			</NavLink>
        </div>
        <div className="corner bottomright">
            <NavLink to="/connect" activeStyle={activeStyle}>
				Contact
			</NavLink>
        </div>
        </>
    );
}
export default cornerNav;