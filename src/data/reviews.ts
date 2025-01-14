import { User } from "./user";

export type ReviewObject = {
    id: number;
    review: string;
    rating: number;
    userId: User["id"];
    date: Date;
    productId: number;
    likeCount: number;
    dislikeCount: number;
    dislikedAsGuest: boolean;
    likedAsGuest: boolean;
};

export const reviews = [
    {
        id: 12,
        review: "Amazing quality, exceeded expectations! The Apple was fantastic.",
        rating: 5,
        userId: 9,
        date: new Date("2023/05/06 15:19:42"),
        productId: 1,
        likeCount: 11,
        dislikeCount: 10,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 13,
        review: "Decent product, but a bit overpriced. The Avocado could have been better.",
        rating: 5,
        userId: 8,
        date: new Date("2023/08/17 10:01:19"),
        productId: 1,
        likeCount: 7,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 14,
        review: "Poor customer service. Product issues not resolved. Had an issue with the Banana.",
        rating: 5,
        userId: 7,
        date: new Date("2023/06/03 21:50:12"),
        productId: 1,
        likeCount: 5,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 15,
        review: "Solid performance, happy with the purchase. The Blueberry was a good choice.",
        rating: 5,
        userId: 6,
        date: new Date("2023/09/20 00:12:50"),
        productId: 1,
        likeCount: 6,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 16,
        review: "Not bad, but not great either. Average product. The Kiwi didn't meet my expectations.",
        rating: 4,
        userId: 5,
        date: new Date("2023/10/17 00:26:21"),
        productId: 1,
        likeCount: 9,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 9,
        review: "Not impressed. Product did not meet expectations. The Banana disappointed me.",
        rating: 2,
        userId: 4,
        date: new Date("2023/05/06 15:19:42"),
        productId: 3,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 10,
        review: "Good value for the money. Happy with the purchase. The Blueberry was worth it.",
        rating: 4,
        userId: 3,
        date: new Date("2023/05/06 15:19:42"),
        productId: 3,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 11,
        review: "Meh. Average product, nothing special. The Kiwi didn't stand out.",
        rating: 3,
        userId: 8,
        date: new Date("2023/05/06 15:19:42"),
        productId: 3,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 1,
        review: "Impressive! Exceeded my expectations. The Apple was a great choice.",
        rating: 4,
        userId: 2,
        date: new Date("2023/04/20 14:43:42"),
        productId: 1,
        likeCount: 1,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 2,
        review: "Mixed feelings, some features are good, others not so much. The Avocado was a mixed bag.",
        rating: 3,
        userId: 3,
        date: new Date("2023/10/17 16:48:48"),
        productId: 1,
        likeCount: 1,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 3,
        review: "Satisfied with the purchase, would buy again. The Banana lived up to my expectations.",
        rating: 5,
        userId: 1,
        date: new Date("2023/02/20 21:17:57"),
        productId: 1,
        likeCount: 1,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 4,
        review: "Terrible quality, regret buying it. The Blueberry was a disappointment.",
        rating: 1,
        userId: 1,
        date: new Date("2023/02/22 01:34:56"),
        productId: 3,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 5,
        review: "Decent product, fair price. The Kiwi was reasonably priced.",
        rating: 4,
        userId: 1,
        date: new Date("2023/03/01 19:31:58"),
        productId: 3,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 6,
        review: "Absolutely amazing! Couldn't be happier with the purchase. The Lemon exceeded my expectations.",
        rating: 5,
        userId: 1,
        date: new Date("2023/02/21 02:39:59"),
        productId: 6,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 7,
        review: "Disappointing, didn't live up to the hype. The Lime fell short of expectations.",
        rating: 2,
        userId: 1,
        date: new Date("2023/01/17 04:38:58"),
        productId: 7,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 8,
        review: "Average at best, expected more for the price. The Orange was just average.",
        rating: 3,
        userId: 1,
        date: new Date("2023/03/01 22:02:12"),
        productId: 8,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 9,
        review: "Highly overrated, wouldn't recommend. The Peach didn't impress.",
        rating: 1,
        userId: 1,
        date: new Date("2023/10/19 23:12:36"),
        productId: 9,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 10,
        review: "Good value for money, exceeded expectations. The Pineapple was worth the money.",
        rating: 4,
        userId: 1,
        date: new Date("2023/02/16 00:55:53"),
        productId: 10,
        likeCount: 1,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 11,
        review: "Fantastic product! Exceeded my expectations. The Strawberry was fantastic.",
        rating: 5,
        userId: 1,
        date: new Date("2023/04/19 16:43:21"),
        productId: 11,
        likeCount: 1,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 12,
        review: "Not bad, but not great either. Mediocre performance. The Watermelon was mediocre.",
        rating: 3,
        userId: 1,
        date: new Date("2023/06/18 08:12:07"),
        productId: 12,
        likeCount: 1,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 14,
        review: "Disappointed. Product didn't last as long as expected. The Mango disappointed me.",
        rating: 2,
        userId: 5,
        date: new Date("2023/09/19 06:39:00"),
        productId: 14,
        likeCount: 1,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 15,
        review: "Solid performance, reasonable price. The Papaya offered solid performance.",
        rating: 4,
        userId: 4,
        date: new Date("2023/11/02 09:19:15"),
        productId: 15,
        likeCount: 1,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
    {
        id: 16,
        review: "Great and refreshing",
        rating: 4,
        userId: 3,
        date: new Date("2023/09/15 19:39:31"),
        productId: 23,
        likeCount: 45,
        dislikeCount: 12,
        dislikedAsGuest: false,
        likedAsGuest: false,
    },
];

// function formatNumber(number) {
//     if (number >= 0 && number < 10) {
//         // If the number is a single-digit number
//         return "0" + number;
//     } else if (number >= 10 && number < 100) {
//         // If the number is a two-digit number
//         return number.toString();
//     } else {
//         // Handle other cases as needed
//         console.error(
//             "Invalid input. The function expects a number between 0 and 99."
//         );
//         return null;
//     }
// }

// const addRandomDate = () => {
//     for (let i = 0; i < reviews.length; i++) {
//         reviews[i].date = `new Date(2023/${formatNumber(
//             Math.floor(Math.random() * 11) + 1
//         )}/${formatNumber(Math.floor(Math.random() * 24))} ${formatNumber(
//             Math.floor(Math.random() * 24)
//         )}:${formatNumber(Math.floor(Math.random() * 60))}:${formatNumber(
//             Math.floor(Math.random() * 60)
//         )})`;
//     }
// };

// console.log(reviews);

// addRandomDate();
