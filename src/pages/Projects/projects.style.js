import styled from 'styled-components';

export const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    padding-right: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const ListContainer = styled.ul`
    margin: 3rem auto 0;
    width: 80%;
    height: 100%;
    min-width: 20rem;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 7rem;   
    @media screen and (min-width: 359px){
        min-width: 28rem;
        padding-right: 0rem;
    }
    @media screen and (min-width: 767px){
        margin: 5rem auto 0;
    }
`;

export const ItemContainer = styled.div`
    width: 100%;        
    @media screen and (min-width: 767px){
        width: 90%;
    }
`;

export const Box = styled.div`
    min-width: 23rem;
    border-bottom: .1rem solid white;
    cursor: pointer;
    @media screen and (min-width: 359px){
        min-width: 28rem;
    }
`;

export const TextA = styled.a`
    text-transform: uppercase;
    font-size: clamp(2rem, 5vw, 3rem);
    white-space: nowrap;
    letter-spacing: clamp(.1rem, 4vw, .3rem);    
    padding-left: 1rem;
    color: #f1f1f1;
    transition: .3s ease-out;
    line-height: 1.6;
    &:hover {
        margin-left: 3rem;
        color: #9ef9ff;
    }
`;

export const RightSide = styled.div`
    position: relative;
    margin: 5rem 0 auto 0;    
    max-height: 25vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 700px){
        margin: 5rem auto 0;
        width: 40%;
        height: 100%;
        min-width: 28rem;
    }
`;

/** IMAGE-SECTION **/
export const ImageWrapper = styled.div`
    position: relative;    
    height: 100%;
    max-height: 25vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media screen and (min-width: 1000px){
        min-height: 30vh;
        width: 100%;
    }
`;

export const Img = styled.img`
    height: 100%;    
    object-fit: contain;
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 100%;
    max-height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;   
`;

/** INFO-SECTION **/
export const InfoContainer = styled.div`
    position: absolute;  
    top: 80%;
    right: 0;
    width: 90%;
    height: max-content;
    background: #f1f1f1;
    color: #000;    
    z-index: 2;
    padding: 1rem;
    border-radius: .3rem;
    border-radius: .3rem;
    @media screen and (min-width: 767px){
        width: 30rem;
        right: -3rem;        
        top: 45%;
    }
    @media screen and (min-width: 1000px){        
        top: 59%;
    }
`;

export const InfoP = styled.p`
    font-size: 1.4rem;
    letter-spacing: .1rem;
    margin-bottom: .2rem;
`;

export const GitLink = styled.a`
    color: #000;
    font-size: 2rem;
    transition: .25s ease-out;
    &:hover{
        color: #9ef9ff;
    }
`;

export const GitExternal = styled.a`
    color: #000;
    font-size: 1.8rem;
    margin-left: 1.2rem;
    &:hover{
        color: #9ef9ff;
    }
`;

