import styled from 'styled-components';

export const ContentContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 54vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeHeader = styled.h1`
    font-family: 'stretch';
    white-space: nowrap;
    text-transform: uppercase;
    margin: 6rem 1rem 0 1rem;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    text-align: center;
    @media screen and (min-width: 359px){
        font-size: 2rem;
        letter-spacing: .3rem;
        margin: 5rem 1rem 0 1rem;
    }
    @media screen and (min-width: 400px){
        margin: 8.5rem 1rem 0 1rem;
        font-size: 2.4rem;
    }
    @media screen and (min-width: 500px){
        font-size: 3rem;
    }
    @media screen and (min-width: 767px){
        font-size: 4.4rem;
        letter-spacing: .6rem;
        margin: 6rem 1rem 0 1rem;
    }
    @media screen and (min-width: 1000px){
        font-size: 6rem;
        letter-spacing: .8rem;
        margin: 8rem 1rem 0 1rem;
    }
    @media screen and (min-width: 1200px){
        font-size: 7rem;
        letter-spacing: 1rem;
         margin: -1rem 1rem 0 1rem;
    }
    &.HeaderOutline{  
        position: absolute;  
        -webkit-text-stroke-width: .01rem;
        -webkit-text-stroke-color: #f1f1f1;
        color: transparent;
        text-align: center;
        :nth-child(2){
        top: .5rem;
        opacity: .5;
        @media screen and (min-width: 399px){
            top: .7rem;
        }
        @media screen and (min-width: 767px){
            top: 1.5rem;
        }
        @media screen and (min-width: 1000px){
            top: 2rem;
        }
    }
        :nth-child(3){
        top: 1rem;
        opacity: .2;
        @media screen and (min-width: 399px){
            top: 1.4rem;
        }
        @media screen and (min-width: 767px){
            top: 3rem;
        }
        @media screen and (min-width: 1000px){
            top: 4rem;
        }
    }
    :nth-child(4){
        top: 1.5rem;
        opacity: .1;
        @media screen and (min-width: 399px){
            top: 2.2rem;
        }
        @media screen and (min-width: 767px){
            top: 4.5rem;
        }
        @media screen and (min-width: 1000px){
            top: 6rem;
        }
    }
    }
`;

export const WorkTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-family: 'nomark';
    margin-top: 6rem;
    margin-left: 1rem;
    font-size: clamp(1.8rem, 6vw, 4rem);
    letter-spacing: 1rem;
    color: #9ef9ff;
    @media screen and (min-width: 767px){
        margin-top: 9rem;
    }
    @media screen and (min-width: 1000px){
        margin-top: 13rem;
    }
    @media screen and (min-width: 1200px){
        margin-top: 12rem;
    }
`;

export const HomeStatement = styled.h5`
  text-align: center;
  text-transform: uppercase;  
  font-size: 1.2rem;
  letter-spacing: 1.8rem;
  line-height: 1.6;
  margin: 6rem 3rem 0;
  @media screen and (min-width: 359px){
        letter-spacing: 2rem;
        font-size: 1.4rem;
    }
     @media screen and (min-width: 500px){
        letter-spacing: 2.2rem;
        font-size: 1.4rem;
    }
    @media screen and (min-width: 767px){
        letter-spacing: 2.6rem;
        font-size: 1.4rem;
        margin: 8rem 3rem 0;
    }
    @media screen and (min-width: 1000px){
        margin: 12rem 3rem 0;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 75vh;
`;

export const HomeImage = styled.img`
    height: 100%;
        opacity: .13;
        margin-left: -18vw;
    @media screen and (min-width: 1000px){        
        margin-left: -5vw;
        margin-top: 0;
    }
     
`;