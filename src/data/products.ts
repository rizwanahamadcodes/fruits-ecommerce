export type Products = {
    id: number;
    name: string;
    categoryId: number;
    price: number;
    imageUrl: string;
    quantityInStock: number;
    unitOfSale: string;
};

export const initialProducts = [
    {
        id: 1,
        name: "Apple",
        price: 250,
        categoryId: 1,
        imageUrl: "/images/products/fruits/apple.jpg",
        quantityInStock: 50,
        unitOfSale: "kg",
    },
    {
        id: 2,
        name: "Avocado",
        price: 150,
        categoryId: 1,
        imageUrl: "/images/products/fruits/avocado.jpg",
        quantityInStock: 30,
        unitOfSale: "piece",
    },
    {
        id: 3,
        name: "Banana",
        price: 100,
        categoryId: 1,
        imageUrl: "/images/products/fruits/banana.jpg",
        quantityInStock: 40,
        unitOfSale: "dozen",
    },
    {
        id: 4,
        name: "Blueberry",
        price: 300,
        categoryId: 1,
        imageUrl: "/images/products/fruits/blueberry.jpg",
        quantityInStock: 20,
        unitOfSale: "pint",
    },
    {
        id: 5,
        name: "Kiwi",
        price: 200,
        categoryId: 1,
        imageUrl: "/images/products/fruits/kiwi.jpg",
        quantityInStock: 25,
        unitOfSale: "piece",
    },
    {
        id: 6,
        name: "Lemon",
        price: 120,
        categoryId: 1,
        imageUrl: "/images/products/fruits/lemon.jpg",
        quantityInStock: 35,
        unitOfSale: "piece",
    },
    {
        id: 7,
        name: "Lime",
        price: 100,
        categoryId: 1,
        imageUrl: "/images/products/fruits/lime.jpg",
        quantityInStock: 30,
        unitOfSale: "piece",
    },
    {
        id: 8,
        name: "Orange",
        price: 150,
        categoryId: 1,
        imageUrl: "/images/products/fruits/orange.jpg",
        quantityInStock: 45,
        unitOfSale: "piece",
    },
    {
        id: 9,
        name: "Peach",
        price: 120,
        categoryId: 1,
        imageUrl: "/images/products/fruits/peach.jpg",
        quantityInStock: 30,
        unitOfSale: "piece",
    },
    {
        id: 10,
        name: "Pineapple",
        price: 200,
        categoryId: 1,
        imageUrl: "/images/products/fruits/pineapple.jpg",
        quantityInStock: 20,
        unitOfSale: "piece",
    },
    {
        id: 11,
        name: "Strawberry",
        price: 350,
        categoryId: 1,
        imageUrl: "/images/products/fruits/strawberry.jpg",
        quantityInStock: 25,
        unitOfSale: "pint",
    },
    {
        id: 12,
        name: "Bell Pepper",
        price: 120,
        categoryId: 2,
        imageUrl: "/images/products/vegetables/bell-pepper.jpg",
        quantityInStock: 35,
        unitOfSale: "piece",
    },
    {
        id: 13,
        name: "Brinjal",
        price: 100,
        categoryId: 2,
        imageUrl: "/images/products/vegetables/brinjal.jpg",
        quantityInStock: 30,
        unitOfSale: "piece",
    },
    {
        id: 14,
        name: "Broccoli",
        price: 180,
        categoryId: 2,
        imageUrl: "/images/products/vegetables/broccoli.jpg",
        quantityInStock: 25,
        unitOfSale: "bunch",
    },
    {
        id: 15,
        name: "Cabbage",
        price: 90,
        categoryId: 2,
        imageUrl: "/images/products/vegetables/cabbage.jpg",
        quantityInStock: 40,
        unitOfSale: "head",
    },
    {
        id: 16,
        name: "Baguette",
        price: 250,
        categoryId: 3,
        imageUrl: "/images/products/breads/baguette.jpg",
        quantityInStock: 40,
        unitOfSale: "pound",
    },
    {
        id: 17,
        name: "Rye Bread",
        price: 300,
        categoryId: 3,
        imageUrl: "/images/products/breads/rye-bread.jpg",
        quantityInStock: 30,
        unitOfSale: "pound",
    },
    {
        id: 18,
        name: "Sliced Bread",
        price: 200,
        categoryId: 3,
        imageUrl: "/images/products/breads/sliced-bread.jpg",
        quantityInStock: 45,
        unitOfSale: "pound",
    },
    {
        id: 19,
        name: "White Bread",
        price: 180,
        categoryId: 3,
        imageUrl: "/images/products/breads/white-bread.jpg",
        quantityInStock: 50,
        unitOfSale: "pound",
    },
    {
        id: 20,
        name: "Apple Juice",
        price: 280,
        categoryId: 4,
        imageUrl: "/images/products/juices/apple-juice.jpg",
        quantityInStock: 30,
        unitOfSale: "liter",
    },
    {
        id: 21,
        name: "Orange Juice",
        price: 350,
        categoryId: 4,
        imageUrl: "/images/products/juices/orange-juice.jpg",
        quantityInStock: 25,
        unitOfSale: "liter",
    },
    {
        id: 22,
        name: "Pear Juice",
        price: 320,
        categoryId: 4,
        imageUrl: "/images/products/juices/pear-juice.jpg",
        quantityInStock: 20,
        unitOfSale: "liter",
    },
    {
        id: 23,
        name: "Tomato Juice",
        price: 380,
        categoryId: 4,
        imageUrl: "/images/products/juices/tomato-juice.jpg",
        quantityInStock: 35,
        unitOfSale: "liter",
    },
];
