import Container from "../../components/Container";
import CountDownTimer from "../../components/CountDownTimer";
import Section, {
    SectionSubtitle,
    SectionTitle,
} from "../../components/Section";

const FlashDealsSection = () => {
    return (
        <Section className="bg-[url('/images/flash.jpg')] bg-cover bg-bottom">
            <Container className="text-center">
                <SectionTitle defaultBottomMargin className="text-white">
                    Flash Deals
                </SectionTitle>
                <SectionSubtitle className="text-white">
                    Limited time offers on selected products
                </SectionSubtitle>

                <CountDownTimer countDownTime={new Date("2024/3/1")} />
            </Container>
        </Section>
    );
};

export default FlashDealsSection;
