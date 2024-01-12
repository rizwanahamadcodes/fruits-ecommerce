import { IoMailUnreadOutline } from "react-icons/io5";
import Button from "./Button";
import { Input } from "../pages/Checkout";
import Section, { SectionCategoryTitle } from "./Section";
import Container from "./Container";
import clsx from "clsx";

const SignUpForNewsLetter = () => {
    return (
        <Section className="overflow-hidden relative bg-gray-200">
            <Container
                className={clsx(
                    "flex flex-col gap-1 justify-between border-[2px] border-primary rounded-2 lg:rounded-full p-1 lg:flex-row relative",
                    "before:content-[''] before:block before:h-[2px] before:w-screen before:bg-primary before:absolute before:top-1/2 before:right-full",
                    "after:content-[''] after:block after:h-[2px] after:w-screen after:bg-primary after:absolute after:top-1/2 after:left-full bg-gray-100"
                )}>
                <div className="flex items-center gap-1">
                    <IoMailUnreadOutline className="text-2 text-gray-600" />
                    <SectionCategoryTitle>
                        Sign up for our newsletter
                    </SectionCategoryTitle>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    className="flex gap-1 grow justify-end">
                    <Input
                        type="text"
                        rounded="rounded-full"
                        placeholder="Your email"
                        className="min-w-0 placeholder:text-gray-600"
                    />
                    <Button type="submit">Subscribe</Button>
                </form>
            </Container>
        </Section>
    );
};

export default SignUpForNewsLetter;
