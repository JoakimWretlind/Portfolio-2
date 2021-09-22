import React from 'react'
import { Section, InnerContainer } from '../../components/sharedStyling'
import Header from '../../components/Header'

const Home = () => {
    return (
        <Section id="home" style={{ background: "#999" }}>
            <InnerContainer>
                <Header title="Home" />
            </InnerContainer>
        </Section>
    )
}

export default Home
