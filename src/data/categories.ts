export type Category = {
    id: number;
    name: string;
    imageUrl: string;
};

export const categories: Category[] = [
    { id: 1, name: "Fruits", imageUrl: "/images/icons/i1.png" },
    { id: 2, name: "Vegetable", imageUrl: "/images/icons/i2.png" },
    { id: 3, name: "Breads", imageUrl: "/images/icons/i3.png" },
    { id: 4, name: "Juices", imageUrl: "/images/icons/i4.png" },
];
