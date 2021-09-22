import React from 'react'
import { Section, InnerContainer } from '../../components/sharedStyling'
import Header from '../../components/Header'

const Projects = () => {
    return (
        <Section id="projects" style={{ background: "#777" }}>
            <InnerContainer>
                <Header title="projects" />
            </InnerContainer>
        </Section>
    )
}

export default Projects