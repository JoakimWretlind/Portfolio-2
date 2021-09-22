import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        height: 100vh;
    }
`;

export const InnerContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 116rem;
    padding: 7rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    padding: 1rem 1.6rem;
    background: transparent;
    border: .2rem solid #9ef9ff;
    color: #9ef9ff;
    border-radius: .4rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 1.6rem;
    cursor: pointer;
    margin-top: 6rem;
    transition: .2s ease-out;
    &:hover {
        color: #FFF;
        border: .2rem solid #FFF;
    }
`;