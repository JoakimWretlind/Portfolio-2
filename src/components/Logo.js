import styled from 'styled-components';

const Logos = styled.a`
    position: fixed;
    top: 7rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    color: #9ef9ff;
    z-index: 11;
    cursor: pointer;
    @media screen and (min-width: 500px){
        font-size: 1.4rem;
        top: 3.4rem;
        left: 3rem;
        transform: translateX(0);
    }
    @media screen and (min-width: 767px){
        font-size: 1.6rem;
        top: 3.2rem;
        left: 10%;
        transform: translateX(0);
    }
`;

const Logo = () => {
    return <Logos>joakim wretlind</Logos>
}

export default Logo
