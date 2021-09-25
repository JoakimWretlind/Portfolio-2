import { FaLinkedin, FaGithubSquare, FaCodepen } from "react-icons/fa";
import { Section, InnerContainer } from '../../components/sharedStyling'
import Header from '../../components/Header'
import {
    Form,
    ContentWrapper,
    LeftSection,
    RightSection,
    Input,
    TextArea,
    Button,
    ContactP,
    SocialContainer,
    SocialHolder
} from './contact.style';

const Contact = () => {
    return (
        <Section id="contact">
            <InnerContainer>
                <Header title="contact" />
                <Form name="contact" method="post">
                    <ContentWrapper>
                        <LeftSection>
                            <Input type="hidden" name="form-name" value="contact" />
                            <ContactP>
                                <label htmlFor="name">Name</label> <br />
                                <Input type="text" id="name" name="name" required />
                            </ContactP>
                            <ContactP>
                                <label htmlFor="email">Email</label> <br />
                                <Input type="email" id="email" name="email" required />
                            </ContactP>
                        </LeftSection>
                        <RightSection>
                            <ContactP>
                                <label htmlFor="message">Message</label> <br />
                                <TextArea id="message" name="message" required></TextArea>
                            </ContactP>
                            <ContactP>
                                <Button type="submit" value="Submit message" />
                            </ContactP>
                        </RightSection>
                    </ContentWrapper>
                </Form >
                <SocialContainer>
                    <SocialHolder><FaGithubSquare /></SocialHolder>
                    <SocialHolder><FaCodepen /></SocialHolder>
                    <SocialHolder><FaLinkedin /></SocialHolder>
                </SocialContainer>
                <p>2021</p>
            </InnerContainer>
        </Section>
    )
}

export default Contact
