import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { Logo } from '../logo/logo'
import NavLinks from './navLinks'
import '../../styles/index.scss';
import { DeviceSize } from '../../responsive';
import { MobileNavLinks } from "./mobileNavLinks";
import Socail  from './social';
const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgb(15 15 15 / 23%);
    display: flex;
    align-items: center;
    padding: 3rem 1rem;
    background-color: #2E1114;
    color: white;
    
`;
const LeftSection = styled.div`
    display:flex;
    justify-content: center;
`;

const MiddleSection = styled.div`
    display:flex;   
    flex: 2;
    justify-content: center;
`;

const RightSection = styled.div`
    display:flex;
`;

function Navbar(props) {
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile})
    return (
        <NavbarContainer>
        <LeftSection><Logo/></LeftSection>
        <MiddleSection>
            {!isMobile && <NavLinks></NavLinks>}
        </MiddleSection>
        <RightSection>
            {!isMobile && <Socail/>}      
            {isMobile && <MobileNavLinks></MobileNavLinks>}
        </RightSection>
    </NavbarContainer>
    );
}
export default Navbar;
