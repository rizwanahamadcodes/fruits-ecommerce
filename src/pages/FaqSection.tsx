import clsx from "clsx";
import Container from "../components/Container";
import Section, { SectionSubtitle, SectionTitle } from "../components/Section";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const faq = [
    {
        question: "How fresh are your fruits and vegetables?",
        answer: "Our fruits and vegetables are sourced daily from local farms to ensure maximum freshness and quality. lorem ",
    },
    {
        question: "Are your products organic?",
        answer: "Yes, we offer a wide selection of organic fruits and vegetables. Look for the 'organic' label on product listings.",
    },
    {
        question: "Can I customize my fruit and vegetable box?",
        answer: "Absolutely! We offer customization options for our fruit and vegetable boxes. Choose your favorite items based on availability.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, debit cards, and secure online payment methods to provide a convenient shopping experience.",
    },
    {
        question:
            "How do you ensure the safety of your produce during delivery?",
        answer: "Our packaging is designed to keep your produce fresh and safe during transit. We prioritize the use of eco-friendly and sustainable packaging materials.",
    },
    {
        question: "Do you deliver to a specific location?",
        answer: "We strive to provide nationwide coverage. Enter your zip code during checkout to confirm if we deliver to your location.",
    },
    {
        question: "What is your return policy?",
        answer: "If you're not satisfied with your purchase, please contact our customer support within [X] days of delivery for assistance. We offer hassle-free returns and refunds.",
    },
    {
        question: "Are there any seasonal discounts or promotions?",
        answer: "Yes, we often run seasonal promotions and discounts. Subscribe to our newsletter to stay updated on the latest offers and exclusive deals.",
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your order in real-time.",
    },
    {
        question: "Can I trust the quality of your products?",
        answer: "We take pride in providing high-quality fruits and vegetables. Customer satisfaction is our priority, and we stand by the freshness and quality of our products.",
    },
];
const FaqSection = () => {
    const faqItems = faq.map((faqItem) => {
        return { label: faqItem.question, description: faqItem.answer };
    });

    return (
        <Section className="bg-gray-100 border-b-[1px] border-b-gray-200">
            <Container>
                <SectionTitle>Frequently Asked Questions</SectionTitle>
                <SectionSubtitle>
                    Some of the most frequently asked questions about our
                    products.
                </SectionSubtitle>
                <Accordion items={faqItems} />
            </Container>
        </Section>
    );
};

type AccordionItemType = {
    label: string;
    description: string;
};

type AccordionProps = {
    items: AccordionItemType[];
};

const Accordion = (props: AccordionProps) => {
    const { items } = props;

    const [itemsWithState, setItemsWithState] = useState(
        items.map((item, index) => {
            return { ...item, itemId: index, open: false };
        })
    );

    const toggleItemState = (itemId: number) => {
        setItemsWithState(
            itemsWithState.map((item) => ({
                ...item,
                open: itemId === item.itemId ? !item.open : false,
            }))
        );
    };

    return (
        <>
            {itemsWithState.map((item, index) => {
                return (
                    <AccordionItem
                        item={item}
                        first={index === 0}
                        last={index === items.length - 1}
                        onClick={(itemId: number) => {
                            toggleItemState(itemId);
                        }}
                    />
                );
            })}
        </>
    );
};

type AccordionItemProps = {
    item: AccordionItemType & { itemId: number; open: boolean };
    first?: boolean;
    last?: boolean;
    onClick: (itemId: number) => void;
};

const AccordionItem = (props: AccordionItemProps) => {
    const { first = false, last = false, item, onClick } = props;
    const labelRef = useRef<HTMLParagraphElement | null>(null);
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        const labelHeight = labelRef.current?.clientHeight;
        const descriptionHeight = descriptionRef.current?.clientHeight;

        if (labelHeight !== undefined && descriptionHeight !== undefined) {
            setHeight(
                item.open ? labelHeight + descriptionHeight : labelHeight
            );
        }
    }, [item.open, item.label, item.description]);

    return (
        <div
            className={clsx(
                "overflow-hidden transition-all mb-0.25 shadow",
                first ? "rounded-t-1.5" : "rounded-t-0.25",
                last ? "rounded-b-1.5" : "rounded-b-0.25"
            )}
            style={{ height: height || "auto" }}>
            <p
                className="p-1.25 group/label bg-white cursor-pointer flex justify-between  hover:text-gray-900"
                ref={labelRef}
                onClick={() => {
                    onClick(item.itemId);
                }}>
                <p>{item.label}</p>
                <span>
                    <BiChevronDown
                        className={clsx(
                            "text-1.5 group-hover/label:text-gray-500 text-gray-300 transition-all",
                            item.open ? "rotate-180" : ""
                        )}
                    />
                </span>
            </p>
            <p className="p-1.25 bg-gray-50" ref={descriptionRef}>
                {item.description}
            </p>
        </div>
    );
};

export default FaqSection;
