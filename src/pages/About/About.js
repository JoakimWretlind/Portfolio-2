import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, InnerContainer } from "../../components/sharedStyling";
import Header from '../../components/Header';
import {
    QuoteContainer,
    Quote,
    TextContainer,
    SmallP,
    TextP,
    Tech,
    ImageContainer,
    ImageHolder,
    Image,
    ImageText,
    IconHolder
} from './about.style';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { aboutData } from "./aboutData";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const imgRefs = useRef(null);
    const imageHolder = useRef(null);

    const onHover = (index) => {
        let targets = index.target;
        gsap.to(targets, { y: -100 });
    }

    const noHover = (index) => {
        let isHovering = index.target;
        console.log(isHovering)
        let targets = index.target;
        gsap.to(targets, { y: 0, delay: .75 });
    }

    return (
        <Section>
            <InnerContainer className="aboutContainer">
                <Header title="about" />
                <TextContainer>
                    <TextP>
                        My name is Joakim! I live in Sweden, outside Stockholm, and really I enjoy coding and web development. I started with Java 2015 and went all-in with HTML, CSS, and JavaScript 2018.
                        I like to make nice designs with fast, clean, and reusable code.
                    </TextP>
                    <QuoteContainer>
                        <IconHolder id="start">
                            <FaQuoteLeft />
                        </IconHolder>
                        <Quote className="about">Work accordingly</Quote>
                        <SmallP>Use your main resources to reach your goals.</SmallP>
                        <SmallP className="aboutQuote">Joakim Wretlind</SmallP>
                        <IconHolder id="end">
                            <FaQuoteRight />
                        </IconHolder>
                    </QuoteContainer>
                    <TextP>
                        I've always been the creative kind, and in my head, new ideas for designs and projects pop up constantly.
                        Currently, I build with React, Style-Components and TypeScript. I run unit- and integrationtests with Jest and animate with Gsap and FramerMotion.
                    </TextP>
                </TextContainer>
                <Tech >Current Tech-Stack</Tech>
                <ImageContainer>
                    {aboutData.map((item, index) => (
                        <div key={index}>
                            <ImageHolder key={index} ref={imageHolder}>
                                <Image src={item.image} style={{ position: "absolute", zIndex: -1 }} ref={imgRefs} alt={item.title} />
                                <Image src={item.image2} onMouseOver={(index) => { onHover(index) }} onMouseLeave={(index) => { noHover(index) }} alt={item.title} />
                                <ImageText>{item.title}</ImageText>
                            </ImageHolder>
                        </div>
                    ))}
                </ImageContainer>
            </InnerContainer>
        </Section>
    )
}

export default About