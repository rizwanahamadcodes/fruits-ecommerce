import Container from "./Container";
import Section from "./Section";
import SignUpForNewsLetter from "./SignUpForNewsLetter";

const Footer = () => {
    return (
        <footer className="bg-gray-200 mt-3 lg:mt-1">
            <Container className="relative">
                <div className="absolute w-full -translate-y-1/2">
                    <SignUpForNewsLetter />
                </div>
            </Container>
            <Section className="">
                <Container className="mt-3 lg:mt-1.5"></Container>
            </Section>
        </footer>
    );
};

export default Footer;
