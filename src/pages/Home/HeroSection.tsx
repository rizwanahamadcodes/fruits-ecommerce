import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { button } from "../../components/Button";
import Container from "../../components/Container";
import Section from "../../components/Section";
import pathConstants from "../../routes/pathConstants";
import veggiesBanner from "/images/veggies-banner-2.jpg";

const HeroSection = () => {
    return (
        <div className="min-h-screen relative pt-navHeight pb-2">
            <Section>
                <img
                    src={veggiesBanner}
                    className="w-full h-full absolute object-cover object-top top-0 left-0 -z-10"
                    alt="hero lemonade banner"
                />
                <Container className="flex flex-col items-center mt-2 gap-2">
                    <h1 className="text-center w-full max-w-[720px]">
                        <span className="text-1.5 text-gray-700 sm:text-2 font-normal">
                            The best
                        </span>
                        <img
                            className="mt-1"
                            src="/images/fruits_&_veggies/fruits_&_veggies.svg"
                            alt=""
                        />
                        <span className="text-1.5 text-gray-700 sm:text-2 font-normal">
                            right at your doorstep
                        </span>
                    </h1>
                    <Link
                        className={button({
                            variant: "solid",
                            colorScheme: "primary",
                        })}
                        to={pathConstants.PRODUCTS}>
                        Start Shopping
                        <FaChevronRight />
                    </Link>
                </Container>
            </Section>
        </div>
    );
};

export default HeroSection;
