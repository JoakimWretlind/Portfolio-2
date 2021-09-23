import React from 'react'
import { Section, InnerContainer } from '../../components/sharedStyling'
import Header from '../../components/Header'
import {
    ContentWrapper,
    LeftSection,
    RightSection
} from './contact.style';

const Contact = () => {
    return (
        <Section id="contact" style={{ background: "#666" }}>
            <InnerContainer>
                <Header title="contact" />


                <form name="contact" method="post">
                    <ContentWrapper>
                        <LeftSection>
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label htmlFor="name">Name</label> <br />
                                <input type="text" id="name" name="name" required />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label> <br />
                                <input type="email" id="email" name="email" required />
                            </p>
                        </LeftSection>
                        <RightSection>
                            <p>
                                <label htmlFor="message">Message</label> <br />
                                <textarea id="message" name="message" required></textarea>
                            </p>
                            <p>
                                <input type="submit" value="Submit message" />
                            </p>
                        </RightSection>
                    </ContentWrapper>
                </form>

            </InnerContainer>
        </Section>
    )
}

export default Contact
