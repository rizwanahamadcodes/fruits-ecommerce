import Button from "../components/Button";
import Container from "../components/Container";
import Section, { SectionSubtitle, SectionTitle } from "../components/Section";
import { Input } from "./Checkout";

const Contact = () => {
    return (
        <Section className="bg-white">
            <div className="h-navHeight"></div>
            <Container className="flex flex-col justify-between lg:flex-row gap-2">
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
                            placeholder="Your name"
                            type="text"
                            className="!bg-gray-100"
                        />
                        <Input
                            rounded="rounded-full"
                            placeholder="Your email"
                            type="email"
                            className="!bg-gray-100"
                        />
                        <textarea
                            className="grow bg-gray-100 placeholder:text-gray-800 focus:bg-gray-100 shadow-inner hover:border-primary text-1 px-1 focus:outline-none  focus:shadow-primary-border focus:border-primary transition rounded-1.5 h-6 pt-1 resize-none"
                            placeholder="Leave a message"
                        />
                        <Button type="submit" variant={"outline"}>
                            Submit
                        </Button>
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
