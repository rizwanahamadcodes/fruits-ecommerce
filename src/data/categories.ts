export type Category = {
    id: number;
    value: string;
    label: string;
    imageUrl: string;
};

export const categories: Category[] = [
    {
        id: 0,
        value: "",
        label: "All",
        imageUrl: "",
    },
    {
        id: 1,
        value: "fruits",
        label: "Fruits",
        imageUrl: "/images/icons/i1.png",
    },
    {
        id: 2,
        value: "vegetable",
        label: "Vegetable",
        imageUrl: "/images/icons/i2.png",
    },
    {
        id: 3,
        value: "breads",
        label: "Breads",
        imageUrl: "/images/icons/i3.png",
    },
    {
        id: 4,
        value: "juices",
        label: "Juices",
        imageUrl: "/images/icons/i4.png",
    },
];
