import Container from "../../components/Container";
import veggiesBanner from "/images/veggies-banner-2.jpg";
import { FaChevronRight } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <div className="h-screen relative pt-navHeight">
            <img
                src={veggiesBanner}
                className="w-full h-full absolute object-cover object-top top-0 left-0 -z-10"
                alt="hero lemonade banner"
            />
            <Container className="flex flex-col items-center mt-2 gap-2">
                <h1 className="text-5 text-center flex flex-col">
                    <span className="text-1.5 sm:text-2">The best</span>
                    <span className="text-4 font-dancing sm:text-5 md:text-6">
                        fruits & veggies
                    </span>
                    <span className="text-1.5 sm:text-2">
                        right at your doorstep
                    </span>
                </h1>

                <button className="flex focus:outline-none focus:shadow-primary-border h-3 px-1 bg-gradient-to-r from-primary to-primary-400 text-white items-center gap-0.5 rounded-full shadow-soft hover:to-primary group">
                    Start Shopping
                    <FaChevronRight className="group:hover:hidden" />
                </button>
            </Container>
        </div>
    );
};

export default HeroSection;
