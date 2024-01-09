import Container from "../components/Container";
import Section, { SectionSubtitle, SectionTitle } from "../components/Section";
import { Input } from "./Checkout";

const Contact = () => {
    return (
        <Section className="bg-white">
            <div className="h-navHeight"></div>
            <Container className="flex flex-col justify-between md:flex-row gap-2">
                <div className="grow max-w-xl">
                    <SectionTitle>Contact Us</SectionTitle>
                    <SectionSubtitle>
                        For any site related queries or feedback, contact us
                    </SectionSubtitle>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className="flex flex-col gap-1">
                        <Input
                            rounded="rounded-full"
                            placeholder="Name"
                            type="text"
                        />
                        <Input
                            rounded="rounded-full"
                            placeholder="Name"
                            type="email"
                        />
                        <textarea
                            className="border-gray-200 grow border hover:border-primary text-1 px-1 focus:outline-none  focus:shadow-primary-border focus:border-primary transition rounded-1.5 h-6 pt-1 resize-none"
                            placeholder="Leave a message"
                        />
                    </form>
                </div>
                <img
                    src="/images/helpdesk.svg"
                    className="w-full md:w-1/3"></img>
            </Container>
        </Section>
    );
};

export default Contact;
