import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: 76rem;
    margin: 3rem 0;
    display: flex;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const LeftSection = styled.div`
    
    
`;

export const RightSection = styled.div`
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 1.4rem;
    background: transparent;
    padding: .3rem;
    margin: .2rem 0 1rem;
    outline: none;
    border: none;
    border-bottom: .1rem solid #f1f1f1;
`;

export const TextArea = styled.textarea`
    width: 100%;
    margin-top: .7rem;
    min-height: 14rem;
    color: #f1f1f1;
    background: transparent;
    padding: .5rem;
    font-family: 'cabinetL';
    letter-spacing: .1rem;
`;

export const Button = styled.input`
    width: 100%;
    text-transform: uppercase;
    padding: 1rem;
    cursor: pointer;
    background: #9ef9ff;
    border: none;
    outline: none;
    font-family: 'cabinetBold';
    letter-spacing: .3rem;
    font-size: 1.6rem;
    transition: .3s ease-out;
    &:hover{
        background: #f1f1f1;
        letter-spacing: .5rem;
    }
`;

export const ContactP = styled.p`
    font-family: 'cabinetL';
    letter-spacing: .1rem;
`;

export const SocialContainer = styled.div`
    width: 100%;
    max-width: 26rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SocialHolder = styled.div`
    height: 3rem;
    width: min-content;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    transition: .25s ease-out;
    margin-bottom: 7rem;
    &:hover {
        color:#9ef9ff;
    }
`;