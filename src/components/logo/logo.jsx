import React from 'react';
import styled from 'styled-components';
import pblogo from '../../static/graphics/logo.svg';


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 60px;
    height: 60px;
    img {
        width: 150%;
        height: 150%;
        
        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
        } 
    }
`;

// const LogoText = styled.h2`
//     font-size: 16px;
//     margin: 0;
//     margin-left: 4px;
//     color: #222;
//     font-weight: 500;
// `;

export function Logo(props) {
    return <LogoWrapper>
        <LogoImg><img src={pblogo} alt='pb'/></LogoImg>
    </LogoWrapper>
}