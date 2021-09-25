import styled from 'styled-components';

export const Scrolls = styled.span`
    position: fixed;
    bottom: 4vh;
    right: 5rem;
    height: 5rem;
    width: 5rem;
    color: #9ef9ff;
    font-size: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    cursor: pointer;
    transition: .25s ease-out;
    &:hover{
        color: #ffffff;
}`

export const FiArrowUps = styled.i`
    margin-top: 1rem;
    animation: scrollTop 0.5s alternate ease infinite;
    @keyframes scrollTop {
    from {
        transform: translateY(2px);
    }
    to {
        transform: translateY(-1px);
    }
}`