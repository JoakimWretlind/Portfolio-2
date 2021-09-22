import styled from 'styled-components';

export const Section = styled.section`
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