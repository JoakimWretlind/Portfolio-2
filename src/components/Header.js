import React from 'react'
import styled from 'styled-components';

const HeaderH1 = styled.h1`
    text-transform: uppercase;
    color: #f1f1f1;
    letter-spacing: 1rem;
    font-size: clamp(3rem, 8vw, 5rem);
    font-family: 'nomark';
`;

const Header = ({ title }) => {
    return (
        <HeaderH1>
            {title}
        </HeaderH1>
    )
}

export default Header
