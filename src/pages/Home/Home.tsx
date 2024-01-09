import SignUpForNewsLetter from "../../components/SignUpForNewsLetter";
import FaqSection from "../FaqSection";
import BestSellerSection from "./BestSellerSection";
import FlashDealsSection from "./FlashDealsSection";
import HeroSection from "./HeroSection";
import NewArrivalsSection from "./NewArrivalsSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <FlashDealsSection />
            <BestSellerSection />
            <NewArrivalsSection />
            <FaqSection />
            <SignUpForNewsLetter />
        </>
    );
};

export default Home;
