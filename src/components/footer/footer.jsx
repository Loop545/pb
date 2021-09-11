import React from 'react';
import {
	AiFillInstagram,
	AiFillTwitterSquare,
	AiFillFacebook,
} from 'react-icons/ai';

import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer-container">
			<div class="legal">
				<ul class="legal-list">
					<li>
						<a href="www.google.com">Terms &amp; Conditions</a>
					</li>
					<li>
						<a href="www.google.com">Privacy Policy</a>
					</li>
					<li>&copy; 2021 Copyright Freddy.</li>
				</ul>
			</div>
			<div className="social-container">
				<a className="icons" href="www.google.com">
					{' '}
					<AiFillFacebook className="icons" size="2rem" />
				</a>
				<a className="icons" href="www.google.com">
					{' '}
					<AiFillInstagram className="icons" size="2rem" />
				</a>
				<a className="icons" href="www.google.com">
					{' '}
					<AiFillTwitterSquare className="icons" size="2rem" />
				</a>
			</div>
		</div>
	);
};
export default Footer;
