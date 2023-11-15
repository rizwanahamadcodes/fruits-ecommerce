import { useContext } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ReferenceContext } from "../../App";
import { button } from "../../components/Button";
import Container from "../../components/Container";
import Section from "../../components/Section";
import pathConstants from "../../routes/pathConstants";
import veggiesBanner from "/images/veggies-banner-2.jpg";

const HeroSection = () => {
    const referenceContext = useContext(ReferenceContext);

    return (
        <div className="min-h-screen relative pt-navHeight pb-2">
            <Section ref={referenceContext.heroSectionReference}>
                <img
                    src={veggiesBanner}
                    className="w-full h-full absolute object-cover object-top top-0 left-0 -z-10"
                    alt="hero lemonade banner"
                />
                <Container className="flex flex-col items-center mt-2 gap-2">
                    <h1 className="text-5 text-center flex flex-col">
                        <span className="text-1.5 sm:text-2 font-normal">
                            The best
                        </span>
                        <span className="text-3.5 font-dancing sm:text-5 md:text-6">
                            fruits & veggies
                        </span>
                        <span className="text-1.5 sm:text-2 font-normal">
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
