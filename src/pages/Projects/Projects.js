import { useState, useRef } from 'react';
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
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
    Img,
    InfoContainer,
    InfoP,
    GitLink,
    GitExternal
} from './projects.style';
import { projectsData } from "./projectsData";
import gsap from 'gsap';
import zero from '../../assets/images/zero.webp';

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
                                        <Box onMouseEnter={() => onHover(item)} >
                                            <TextA href={item.path} target="_blank" rel="noopener">{item.title}</TextA>
                                        </Box>
                                    </div>
                                )
                            })}
                        </ItemContainer>
                    </ListContainer>
                    <RightSide>
                        <ImageWrapper>
                            <Img src={zero} className="default" alt="default img" />
                            <ImageContainer ref={el => (imageWrapper = el)}>
                                <Img src={pictures.image} alt={pictures.title} />
                            </ImageContainer>
                        </ImageWrapper>
                        <InfoContainer >
                            <InfoP className="default">
                                Hover The List To See More Images
                            </InfoP>
                            <InfoP>
                                {pictures.desc}
                            </InfoP>
                            <InfoP>
                                {pictures.tech}
                            </InfoP>
                            <InfoP>
                                <GitLink href={pictures.gitLink} target="_blank" rel="noopener"><FaGithubSquare /></GitLink>
                                <GitExternal href={pictures.path} target="_blank" rel="noopener"><FaExternalLinkAlt /></GitExternal>
                            </InfoP>
                        </InfoContainer>
                    </RightSide>
                </ContentContainer>
            </InnerContainer>
        </Section>
    )
}

export default Projects