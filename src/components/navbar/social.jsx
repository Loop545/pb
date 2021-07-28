import React from 'react';
import styled from 'styled-components';
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai';

const SocailLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        height:0;
        display: flex;
        align-items: center;
    }
`;
const SocailLinksWrapper = styled.div`
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
    margin-top: 2.8rem;
    @media (max-width: 768px) {
        padding: 0;
        display: flex;
        list-style: none;
        margin:0;
    }
`;
export const SocialIcons = styled.a`
transition: 0.3s ease;
color: #3b3c43;
border-radius: 10px;
padding: 2px 8px;
&:hover {
    background-color: #336699;
    transform: scale(1.2);
    cursor: pointer;
    
  }
  @media (max-width: 768px) {
        transition: 0.3s ease;
        color: #3b3c43;
        border-radius: 30px;
        padding: 2px 7px;
        &:hover {
            background-color: #336699;
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
