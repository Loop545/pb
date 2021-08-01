import React from 'react';
import styled from 'styled-components';
import '../../styles/index.scss';

//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'raviger';



const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    position: sticky;
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
    color: white;
    font: $font_regular;
    font-weight: 500;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

// const Link = styled.a`
//     text-decoration: none;
//     color: inherit;
//     font-size: inherit;
//     border-bottom: 2px solid transparent;
//     transition: all 220ms ease-in-out;
//     padding-bottom: 0.2rem;

//     &:hover {
//         border-bottom: 2px solid #336699;
//     }
// `;

const  Navlinks= (props) => {
    return <NavLinksContainer>
                <LinksWrapper>
                    <LinkItem><Link className='link' href='/home'>Home</Link></LinkItem>
                    <LinkItem><Link className='link' href='/scribble'>Scribbles</Link></LinkItem>
                    <LinkItem><Link className='link' href='/about'>About</Link></LinkItem>
                    <LinkItem><Link className='link' href='connect'>Connect</Link></LinkItem>
                </LinksWrapper>
            </NavLinksContainer>
            {/* 
                <Router>
                <Switch>
             <Route path='/' exact>
                 <Home />
             </Route>
            </Switch>
            <Switch>
             <Route path='/scribble'>
                 <Scribble/>
             </Route>
            </Switch>
            <Switch>
             <Route path='/about'>
                 <About/>
             </Route>
            </Switch>
            <Switch>
             <Route path='/connect'>
                 <Connect/>
             </Route>
            </Switch>
        </Router> */}
}
export default Navlinks;