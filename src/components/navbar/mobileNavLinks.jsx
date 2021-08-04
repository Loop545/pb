import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import Socail from "./social";
import '../../styles/index.scss'


import { Link } from 'raviger';




const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 250px;
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
  color: black;
  font-size: 20px;
  padding: 2rem;
  margin-top: 2.9rem;
`;


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
                  <Link className='link' href="/blog">Blog</Link>
                </LinkItem>
                <LinkItem>
                  <Link className='link' href="/poem">Poem</Link>
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
  );
}