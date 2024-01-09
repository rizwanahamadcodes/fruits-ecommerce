import SignUpForNewsLetter from "../../components/SignUpForNewsLetter";
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
            <SignUpForNewsLetter />
        </>
    );
};

export default Home;
