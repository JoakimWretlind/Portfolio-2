import styled from 'styled-components';

export const ContentWrapper = styled.div`
    border: 2px solid yellow;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const LeftSection = styled.div`
    border: 2px solid red;
    width: 100%;
    min-width: 28.2rem;
`;

export const RightSection = styled.div`
    border: 2px solid blue;
    width: 100%;
    min-width: 28.2rem;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 1.4rem;
    color: #f1f1f1;
    padding: .3rem;
    margin: .2rem 0 1rem;
    outline: none;
    border: none;
    border-bottom: .2rem solid #f1f1f1;
    background: transparent;
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 14rem;
`;

export const Button = styled.input`
    width: 100%;
`;