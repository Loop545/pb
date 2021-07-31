import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import Socail from "./social";
import '../../styles/index.scss'

// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'raviger';

//components
import Home from '../../pages/Home';
import About from '../../pages/About';
import Scribble from '../../pages/Scribble';
import Connect from '../../pages/Connect';


const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 160px;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 100px;
  left: 0;
  box-shadow: 0 1px 3px rgb(15 15 15 / 23%);
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.5em;
  color: #222;
  font-weight: 500;
  font-size: 20px;
  font: $font_regular;
  display: flex;
  margin-bottom: 10px;
`;

const Text = styled.h1`
  color:#501B1D;
  font-size: 20px;
  padding: 2rem;
  margin-top: 1rem;
`;

// const Link = styled.a`
//   text-decoration: none;
//   color: inherit;
//   font-size: inherit;
// `;

const Marginer = styled.div`
  height: 2em;
  
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
      <NavLinksContainer>
        <Text>Menu</Text>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
          <LinksWrapper>
            <LinkItem>
              <Link className='link' href="/home">Home</Link>
            </LinkItem>
            <LinkItem>
              <Link className='link' href="/scribble">Scribbles</Link>
            </LinkItem>
            <LinkItem>
              <Link className='link' href="/about">About</Link>
            </LinkItem>
            <LinkItem>
              <Link  className='link' href="/connect">Connect</Link>
            </LinkItem>
            <Marginer />
            <Socail/>
          </LinksWrapper>
        )}
      </NavLinksContainer>
  //     <Router>
  //     <Switch>
  //     <Route path='/' exact>
  //         <Home />
  //     </Route>
  //   </Switch>
  //   <Switch>
  //     <Route path='/scribble'>
  //         <Scribble/>
  //     </Route>
  //   </Switch>
  //   <Switch>
  //     <Route path='/about'>
  //         <About/>
  //     </Route>
  //   </Switch>
  //   <Switch>
  //     <Route path='/connect'>
  //         <Connect/>
  //     </Route>
  //   </Switch>
  //  </Router>
  );
}