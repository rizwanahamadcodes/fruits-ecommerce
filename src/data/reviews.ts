import { User } from "./user";

export type Review = {
    id: number;
    review: string;
    rating: number;
    reviewerId: User["id"];
    date: Date;
    productId: number;
};

export const reviews = [
    {
        id: 1,
        review: "Impressive! Exceeded my expectations.",
        rating: 4,
        reviewerId: 6,
        date: new Date(),
        productId: 1,
    },
    {
        id: 2,
        review: "Mixed feelings, some features are good, others not so much.",
        rating: 3,
        reviewerId: 7,
        date: new Date(),
        productId: 1,
    },
    {
        id: 3,
        review: "Satisfied with the purchase, would buy again.",
        rating: 5,
        reviewerId: 8,
        date: new Date(),
        productId: 1,
    },
    {
        id: 4,
        review: "Terrible quality, regret buying it.",
        rating: 1,
        reviewerId: 9,
        date: new Date(),
        productId: 1,
    },
    {
        id: 5,
        review: "Decent product, fair price.",
        rating: 4,
        reviewerId: 10,
        date: new Date(),
        productId: 1,
    },
    {
        id: 6,
        review: "Absolutely amazing! Couldn't be happier with the purchase.",
        rating: 5,
        reviewerId: 11,
        date: new Date(),
        productId: 2,
    },
    {
        id: 7,
        review: "Disappointing, didn't live up to the hype.",
        rating: 2,
        reviewerId: 12,
        date: new Date(),
        productId: 2,
    },
    {
        id: 8,
        review: "Average at best, expected more for the price.",
        rating: 3,
        reviewerId: 13,
        date: new Date(),
        productId: 2,
    },
    {
        id: 9,
        review: "Highly overrated, wouldn't recommend.",
        rating: 1,
        reviewerId: 14,
        date: new Date(),
        productId: 2,
    },
    {
        id: 10,
        review: "Good value for money, exceeded expectations.",
        rating: 4,
        reviewerId: 15,
        date: new Date(),
        productId: 2,
    },
    {
        id: 11,
        review: "Fantastic product! Exceeded my expectations.",
        rating: 5,
        reviewerId: 16,
        date: new Date(),
        productId: 3,
    },
    {
        id: 12,
        review: "Not bad, but not great either. Mediocre performance.",
        rating: 3,
        reviewerId: 17,
        date: new Date(),
        productId: 3,
    },
    {
        id: 13,
        review: "Well worth the investment! Quality is top-notch.",
        rating: 5,
        reviewerId: 18,
        date: new Date(),
        productId: 3,
    },
    {
        id: 14,
        review: "Disappointed. Product didn't last as long as expected.",
        rating: 2,
        reviewerId: 19,
        date: new Date(),
        productId: 3,
    },
    {
        id: 15,
        review: "Solid performance, reasonable price.",
        rating: 4,
        reviewerId: 20,
        date: new Date(),
        productId: 3,
    },
];
