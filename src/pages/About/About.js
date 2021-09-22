import React from 'react'
import { Section, InnerContainer } from '../../components/sharedStyling'
import Header from '../../components/Header'

const About = () => {
    return (
        <Section id="about" style={{ background: "#888" }}>
            <InnerContainer>
                <Header title="about" />
            </InnerContainer>
        </Section>
    )
}

export default About