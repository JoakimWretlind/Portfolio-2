import styled from 'styled-components';

export const TextContainer = styled.div`
    max-width: 76rem;
    margin: 3rem auto 0;
    @media screen and (min-width: 450px){
        margin: 3rem 4rem 0;
    }
    @media screen and (min-width: 767px){
        margin: 5rem 4rem 0;
    }
    @media screen and (min-width: 1000px){
        margin: 5rem 3rem 0;
    }
`;

export const TextP = styled.p`
    font-size: 1.6rem;
    line-height: 1.4;
    letter-spacing: .1rem;    
    margin-bottom: 3rem;
`;

export const QuoteContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 100rem;
    margin: 7rem 0 3rem;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1000px){
        margin: 5rem 0 3rem;
    }
`;

export const IconHolder = styled.div`
    position: absolute;
    font-size: 3rem;
    color: #9ef9ff;
    &#start{
        top: -3rem;
        left: 0;
        @media screen and (min-width: 1000px){
            top: -2rem;
            left: 7rem;
        }
    }
    &#end{
        bottom: 0;
        right: 0;
        @media screen and (min-width: 1000px){
            bottom: 0;
            right: 7rem;
        }
    }
`;

export const Quote = styled.h2`
  font-size: 3rem;
  text-align: center;
  letter-spacing: .3rem;
  font-family: 'cabinetBold';
`;

export const SmallP = styled.p`
    font-size: 1.2rem;
    letter-spacing: .1rem;
    margin: 1rem 0 2rem;
    text-align: center;
    font-family: 'cabinetXLight';
    &.aboutQuote{
        font-style: italic;
        margin: -1rem 0 3rem;
    }
`;

export const Tech = styled.h4`    
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: .5rem;
    font-size: 2rem;
    letter-spacing: .5rem;
    width: 100%;
    color: #9ef9ff;
    font-family: 'nomark';
    @media screen and (min-width: 767px){
        margin-left: 10rem;
    }
`;

export const ImageContainer = styled.div`    
    width: 100%;
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    align-items: center;    
    @media screen and (min-width: 359px){
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    align-items: center;
    }
`;

export const ImageHolder = styled.div` 
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
`;

export const Image = styled.img`
    height: 7rem;
    margin-bottom: .7rem;
    width: auto;
    @media screen and (min-width: 359px){
        height: 9rem;
    } 
`;

export const ImageText = styled.p`
    font-size: 1.4rem;
    letter-spacing: .1rem;
    text-transform: capitalize;
`;