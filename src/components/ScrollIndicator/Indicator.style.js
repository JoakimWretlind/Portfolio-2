import styled from 'styled-components';

export const ProgressContainer = styled.div`
    position: fixed;
    height: 16rem;
    width: 5rem;
    margin-top: 40%;
    transform: translateY(-50%);
    margin-left: 6%;
    background: rgb(113,178,182,.2);
    border-radius: .5rem;    
`;

export const ProgressMainWrapper = styled.div`
    position: fixed;
    display: flex;
    background-color: rgb(113,178,182,.9);
    height: 14rem;
    width: 0.1rem;
    top: 50%;
   // left: 80%;
    right: 7rem;
    transform: translateY(-50%);
    display: none;
    @media screen and (min-width: 767px){
        display: block;
         z-index: 20;
    }`;

export const ProgressMainStyle = styled.div`
   position: absolute;
    right: -0.06rem;
    height: 0.1rem;
    width: 0.1rem;
    background: rgb(113,178,182);
    z-index: 200;
`;

export const ProgressCounter = styled.h2`
    position: absolute;
    right: -3rem;
    top: 0.5rem;
    color: rgb(113,178,182);
    font-size: 1rem;
    font-family: 'cabinet-l';
    letter-spacing: .1rem;
`;