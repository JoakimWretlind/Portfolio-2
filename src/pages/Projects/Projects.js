import { useState, useRef } from 'react';
import { Section, InnerContainer } from "../../components/sharedStyling";
import Header from '../../components/Header';
import {
    TextA,
    ContentContainer,
    ListContainer,
    ItemContainer,
    Box,
    ImageWrapper,
    ImageContainer,
    RightSide,
    Img
} from './projects.style';
import { projectsData } from "./projectsData";
import gsap from 'gsap';
import zero from '../../assets/images/zero.jpg';

const Projects = () => {
    const [pictures, setPictures] = useState("");
    let imageWrapper = useRef(null);

    let tl = gsap.timeline();
    let tl2 = gsap.timeline();

    const onHover = (link) => {
        setPictures(link);
        tl.fromTo(imageWrapper, { x: "-100%" }, { x: "0", duration: 1 });
        tl2.to(".default", { x: "100%", display: "none", duration: .35 });

    }

    const noHover = (item) => {
        //  tl2.to(".overlay", { x: "0", duration: .1 })
    }

    return (
        <Section id="projects">
            <InnerContainer className="projectsContainer">
                <Header title="projects" />
                <ContentContainer>
                    <ListContainer>
                        <ItemContainer>
                            {projectsData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Box onMouseEnter={() => onHover(item)} onMouseLeave={() => noHover(item)}>
                                            <TextA href={item.path} target="_blank">{item.title}</TextA>
                                        </Box>
                                    </div>
                                )
                            })}
                        </ItemContainer>
                    </ListContainer>
                    <RightSide>
                        <ImageWrapper>
                            <Img src={zero} className="default" />
                            <ImageContainer ref={el => (imageWrapper = el)}>
                                <Img src={pictures.image} />
                            </ImageContainer>
                        </ImageWrapper>
                    </RightSide>
                </ContentContainer>
            </InnerContainer>
        </Section>
    )
}

export default Projects