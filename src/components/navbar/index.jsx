import React from 'react';
import styled from 'styled-components';

// Styles
import '../../styles/index.scss';

// Responsive
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../responsive';

// Components
import { Logo } from '../logo/logo';
import Socail from './social';
import MobileNavLinks from './mobileNavLinks';
import NavLinks from './navLinks';

const NavbarContainer = styled.div`
	width: 100%;
	height: 60px;
	// box-shadow: 0 1px 3px rgb(15 15 15 / 23%);
	display: flex;
	align-items: center;
	padding: 3rem 1rem;
	background: black;
	color: white;
	position: fixed;
	@media (max-width: 768px) {
		width: 100%;
		height: 60px;
		// box-shadow: 0 1px 3px rgb(15 15 15 / 23%);
		display: flex;
		align-items: center;
		padding: 0rem 1rem;
		background-color: black;
		color: white;
		position: fixed;
	}
`;
const LeftSection = styled.div`
	display: flex;
	justify-content: center;
`;

const MiddleSection = styled.div`
	display: flex;
	flex: 2;
	justify-content: center;
`;

const RightSection = styled.div`
	display: flex;
`;

function Navbar(props) {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	return (
		<NavbarContainer>
			<LeftSection>
				<Logo />
			</LeftSection>
			<MiddleSection>{!isMobile && <NavLinks></NavLinks>}</MiddleSection>
			<RightSection>
				{!isMobile && <Socail />}
				{isMobile && <MobileNavLinks></MobileNavLinks>}
			</RightSection>
		</NavbarContainer>
	);
}
export default Navbar;
