import React from 'react';
import styled from 'styled-components';
import '../../styles/index.scss';
import Socail from './social';


const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
    margin-top: 1.6rem;
    padding: 0 1.1em;
    height: 100%;
    color: #3b3c43;
    font: $font_regular;
    font-weight: 500;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    border-bottom: 2px solid transparent;
    transition: all 220ms ease-in-out;
    padding-bottom: 0.2rem;

    &:hover {
        border-bottom: 2px solid #336699;
    }
`;

const  Navlinks= (props) => {
    return <NavLinksContainer>
        <LinksWrapper>
            <LinkItem><Link href='#'>Home</Link></LinkItem>
            <LinkItem><Link href='#'>Scribble</Link></LinkItem>
            <LinkItem><Link href='#'>About</Link></LinkItem>
            <LinkItem><Link href='#'>Connect</Link></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
}
export default Navlinks;