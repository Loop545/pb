import React from 'react';
import styled from 'styled-components';
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai';

const SocailLinksContainer = styled.div`
    display: flex;
    align-items: center;s
    @media (max-width: 768px) {
        height:3rem;
        width: 100%;
        display: flex;
        align-items: center;
    }
`;
const SocailLinksWrapper = styled.div`
    padding: 0;
    display: flex;
    list-style: none;
    margin-top: 0.8rem;
    @media (max-width: 768px) {
        padding: 0;
        display: flex;
        list-style: none;
        margin:0;
    }
`;
export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 10px;
padding: 2px 8px;
&:hover {
    transform: scale(1.2);
    cursor: pointer;
    
  }
  @media (max-width: 768px) {
        transition: 0.3s ease;
        color: #333A56;
        width: 100%;
        height: 3rem;
        border-radius: 30px;
        padding: 6px 9px;
        &:hover {
            transform: scale(1.2);
            cursor: pointer;
            
        }
    }
`

const Socail = () => {
    return (
        <SocailLinksContainer>
            <SocailLinksWrapper>
                <SocialIcons href='https://www.instagram.com/pranab.raj_/'>
                <AiFillFacebook size='2rem'/>
                </SocialIcons>
                <SocialIcons href='https://www.instagram.com/pranab.raj_/'>
                <AiFillInstagram size='2rem'/>
                </SocialIcons>
                <SocialIcons href='https://www.instagram.com/pranab.raj_/'>
                <AiFillTwitterSquare size='2rem'/>
                </SocialIcons>
                
            </SocailLinksWrapper>
        </SocailLinksContainer>
    )

}
export default Socail;
