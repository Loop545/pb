import React from 'react';

// Styles
import '../../styles/index.scss';

// Responsive
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../responsive';

// Components
import MobileNavLinks from './mobileNavLinks';
import CornerNav from './cornerNav';


function Navbar() {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	return (
		<>
			{!isMobile && <CornerNav/>}
			
			{isMobile && <MobileNavLinks></MobileNavLinks>}
			
		</>
	);
}
export default Navbar;
