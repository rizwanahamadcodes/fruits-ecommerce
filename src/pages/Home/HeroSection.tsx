import { useContext } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Section from "../../components/Section";
import veggiesBanner from "/images/veggies-banner-2.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { ReferenceContext } from "../Layout";
import { useNavigate } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";

const HeroSection = () => {
    const referenceContext = useContext(ReferenceContext);
    const navigate = useNavigate();

    const handleStartShopping = () => {
        console.log("Hello world");
        navigate(pathConstants.PRODUCTS_LIST);
    };

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
                        <span className="text-1.5 sm:text-2">The best</span>
                        <span className="text-3.5 font-dancing sm:text-5 md:text-6">
                            fruits & veggies
                        </span>
                        <span className="text-1.5 sm:text-2">
                            right at your doorstep
                        </span>
                    </h1>
                    <Button
                        onClick={handleStartShopping}
                        rightIcon={FaChevronRight}>
                        Start Shopping
                    </Button>
                </Container>
            </Section>
        </div>
    );
};

export default HeroSection;
