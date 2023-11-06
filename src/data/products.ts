export type Products = {
    id: number;
    name: string;
    categoryId: number;
    price: number;
};

export const initialProducts = [
    { id: 1, name: "Banana", categoryId: 1, price: 1.99 },
    { id: 2, name: "Carrot", categoryId: 2, price: 0.99 },
    { id: 3, name: "Orange", categoryId: 1, price: 1.49 },
    { id: 4, name: "Baguette", categoryId: 3, price: 2.49 },
    { id: 5, name: "Apple", categoryId: 1, price: 1.29 },
    { id: 6, name: "Strawberry", categoryId: 1, price: 2.99 },
    { id: 7, name: "Whole Wheat Bread", categoryId: 3, price: 2.29 },
    { id: 8, name: "Grape Juice", categoryId: 4, price: 2.99 },
    { id: 9, name: "Kiwi", categoryId: 1, price: 1.79 },
    { id: 10, name: "Sourdough Bread", categoryId: 3, price: 2.99 },
    { id: 11, name: "Cherry", categoryId: 1, price: 2.49 },
    { id: 12, name: "Raspberry", categoryId: 1, price: 2.99 },
    { id: 13, name: "Apple Juice", categoryId: 4, price: 2.49 },
    { id: 14, name: "Lemon", categoryId: 1, price: 1.49 },
    { id: 15, name: "Blackberry", categoryId: 1, price: 2.79 },
    { id: 16, name: "Papaya", categoryId: 1, price: 3.99 },
    { id: 17, name: "Cucumber", categoryId: 2, price: 0.99 },
    { id: 18, name: "Cranberry", categoryId: 1, price: 2.49 },
    { id: 19, name: "Apricot", categoryId: 1, price: 2.19 },
    { id: 20, name: "Peach", categoryId: 1, price: 2.39 },
    { id: 21, name: "Green Tea", categoryId: 5, price: 3.49 },
    { id: 22, name: "Black Tea", categoryId: 5, price: 3.29 },
    { id: 23, name: "Herbal Tea", categoryId: 5, price: 3.59 },
    { id: 24, name: "Chai Tea", categoryId: 5, price: 3.79 },
];
