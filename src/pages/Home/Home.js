import { useEffect, useRef } from 'react';
import { Section } from '../../components/sharedStyling'
import {
    ContentContainer,
    HomeHeader,
    WorkTitle,
    HomeStatement,
    ImageContainer,
    HomeImage
} from './home.style';
import ContactBtn from '../../components/ContactButton';
import selfie from '../../assets/images/selfie.webp'

const Home = () => {
    const imageRef = useRef(null);
    const workRef = useRef(null);
    const statementRef = useRef(null);
    const headOne = useRef(null);
    const headTwo = useRef(null);
    const headThree = useRef(null);
    const headFour = useRef(null);
    const contactRef = useRef(null);

    return (
        <Section id="home" style={{ background: "#999" }}>
            <ImageContainer ref={imageRef}>
                <HomeImage src={selfie} alt="image of Joakim" />
            </ImageContainer>
            <ContentContainer>
                <HomeHeader className="headOne" ref={headOne}>
                    joakim wretlind
                </HomeHeader>
                <HomeHeader className="HeaderOutline" ref={headTwo}>
                    joakim wretlind
                </HomeHeader>
                <HomeHeader className="HeaderOutline" ref={headThree}>
                    joakim wretlind
                </HomeHeader>
                <HomeHeader className="HeaderOutline" ref={headFour}>
                    joakim wretlind
                </HomeHeader>
                <WorkTitle ref={workRef}>
                    web-devloper
                </WorkTitle>
                <HomeStatement ref={statementRef}>
                    welcome
                </HomeStatement>
                <ContactBtn ref={contactRef}>
                    contact
                </ContactBtn>
            </ContentContainer>
        </Section>
    )
}

export default Home
