import { User } from "./user";

export type Review = {
    id: number;
    review: string;
    rating: number;
    reviewerId: User["id"];
    date: Date;
    productId: number;
};

export const reviews: Review[] = [
    {
        id: 1,
        review: "Great product, really enjoyed using it!",
        rating: 5,
        reviewerId: 1,
        date: new Date(),
        productId: 1,
    },
    {
        id: 2,
        review: "Not as expected, quite disappointing.",
        rating: 2,
        reviewerId: 2,
        date: new Date(),
        productId: 2,
    },
    {
        id: 3,
        review: "Average product, nothing special.",
        rating: 3,
        reviewerId: 3,
        date: new Date(),
        productId: 2,
    },
    {
        id: 4,
        review: "Excellent! Highly recommend.",
        rating: 5,
        reviewerId: 4,
        date: new Date(),
        productId: 3,
    },
    {
        id: 5,
        review: "Poor quality, not worth the price.",
        rating: 1,
        reviewerId: 5,
        date: new Date(),
        productId: 3,
    },
];
