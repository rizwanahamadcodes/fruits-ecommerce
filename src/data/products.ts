export type Product = {
    id: number;
    name: string;
    categoryId: number;
    price: number;
    imageUrl: string;
    quantityInStock: number;
    unitOfSale: string;
    moreImages: string[];
    productDescription: string;
};

export const initialProducts: Product[] = [
    {
        id: 1,
        name: "Apple",
        price: 250,
        categoryId: 1,
        imageUrl: "/images/products/fruits/apple.jpg",
        quantityInStock: 50,
        unitOfSale: "kg",
        moreImages: [
            "/images/products/fruits/apple-2.jpg",
            "/images/products/fruits/apple-3.jpg",
            "/images/products/fruits/apple-4.jpg",
        ],
        productDescription:
            "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.",
    },
    {
        id: 2,
        name: "Avocado",
        price: 150,
        categoryId: 1,
        imageUrl: "/images/products/fruits/avocado.jpg",
        quantityInStock: 30,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/fruits/avocado-2.jpg",
            "/images/products/fruits/avocado-3.jpg",
            "/images/products/fruits/avocado-4.jpg",
        ],
        productDescription:
            "An avocado is an edible fruit produced by an avocado tree. Avocados are cultivated worldwide and are the most widely grown species in the genus Persea. The tree originated in Central America, where its wild ancestor, Persea americana, is still found today.",
    },
    {
        id: 3,
        name: "Banana",
        price: 100,
        categoryId: 1,
        imageUrl: "/images/products/fruits/banana.jpg",
        quantityInStock: 40,
        unitOfSale: "dozen",
        moreImages: [
            "/images/products/fruits/banana-2.jpg",
            "/images/products/fruits/banana-3.jpg",
            "/images/products/fruits/banana-4.jpg",
        ],
        productDescription:
            "A banana is an edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert bananas.",
    },
    {
        id: 4,
        name: "Blueberry",
        price: 300,
        categoryId: 1,
        imageUrl: "/images/products/fruits/blueberry.jpg",
        quantityInStock: 20,
        unitOfSale: "pint",
        moreImages: [
            "/images/products/fruits/blueberry-2.jpg",
            "/images/products/fruits/blueberry-3.jpg",
            "/images/products/fruits/blueberry-4.jpg",
        ],
        productDescription:
            "Blueberries are perennial flowering plants with blue– or purple–colored berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries.",
    },
    {
        id: 5,
        name: "Kiwi",
        price: 200,
        categoryId: 1,
        imageUrl: "/images/products/fruits/kiwi.jpg",
        quantityInStock: 25,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/fruits/kiwi-2.jpg",
            "/images/products/fruits/kiwi-3.jpg",
            "/images/products/fruits/kiwi-4.jpg",
        ],
        productDescription:
            "Kiwifruit, or Chinese gooseberry is the edible berry of several species of woody vines in the genus Actinidia. The most common cultivar group of kiwifruit is oval, about the size of a large hen's egg. It has a thin, fuzzy, fibrous, tart but edible light brown skin and light green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft texture with a sweet and unique flavor.",
    },
    {
        id: 6,
        name: "Lemon",
        price: 120,
        categoryId: 1,
        imageUrl: "/images/products/fruits/lemon.jpg",
        quantityInStock: 35,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/fruits/lemon-2.jpg",
            "/images/products/fruits/lemon-3.jpg",
            "/images/products/fruits/lemon-4.jpg",
        ],
        productDescription:
            "The lemon, Citrus limon, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India. Its fruits are round in shape.",
    },
    {
        id: 7,
        name: "Lime",
        price: 100,
        categoryId: 1,
        imageUrl: "/images/products/fruits/lime.jpg",
        quantityInStock: 30,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/fruits/lime-2.jpg",
            "/images/products/fruits/lime-3.jpg",
            "/images/products/fruits/lime-4.jpg",
        ],
        productDescription:
            "The lime is a citrus fruit, which is typically round, green in color, 3–6 centimetres in diameter, and contains acidic juice vesicles.",
    },
    {
        id: 8,
        name: "Orange",
        price: 150,
        categoryId: 1,
        imageUrl: "/images/products/fruits/orange.jpg",
        quantityInStock: 45,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/fruits/orange-2.jpg",
            "/images/products/fruits/orange-3.jpg",
            "/images/products/fruits/orange-4.jpg",
        ],
        productDescription:
            "Orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.",
    },
    {
        id: 9,
        name: "Peach",
        price: 120,
        categoryId: 1,
        imageUrl: "/images/products/fruits/peach.jpg",
        quantityInStock: 30,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/fruits/peach-2.jpg",
            "/images/products/fruits/peach-3.jpg",
            "/images/products/fruits/peach-4.jpg",
        ],
        productDescription:
            "Peaches and nectarines are the same species, even though they are regarded commercially as different fruits. In contrast to peaches, whose fruits present the characteristic fuzz on the skin, nectarines are characterized by the absence of fruit-skin trichomes (fuzz-less fruit); genetic studies suggest nectarines are produced due to a recessive allele, whereas peaches are produced from a dominant allele for fuzzy skin.",
    },
    {
        id: 10,
        name: "Pineapple",
        price: 200,
        categoryId: 1,
        imageUrl: "/images/products/fruits/pineapple.jpg",
        quantityInStock: 20,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/fruits/pineapple-2.jpg",
            "/images/products/fruits/pineapple-3.jpg",
            "/images/products/fruits/pineapple-4.jpg",
        ],
        productDescription: "",
    },
    {
        id: 11,
        name: "Strawberry",
        price: 350,
        categoryId: 1,
        imageUrl: "/images/products/fruits/strawberry.jpg",
        quantityInStock: 25,
        unitOfSale: "pint",
        moreImages: [
            "/images/products/fruits/strawberry-2.jpg",
            "/images/products/fruits/strawberry-3.jpg",
            "/images/products/fruits/strawberry-4.jpg",
        ],
        productDescription:
            "Strawberries are a bright red, sweet, and juicy edible fruit. They are a member of the rose family and scientifically known as Fragaria x ananassa. The fruit's name comes from the Old English word, streawberige.",
    },
    {
        id: 12,
        name: "Bell Pepper",
        price: 120,
        categoryId: 2,
        imageUrl: "/images/products/vegetables/bell-pepper.jpg",
        quantityInStock: 35,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/vegetables/bell-pepper-2.jpg",
            "/images/products/vegetables/bell-pepper-3.jpg",
            "/images/products/vegetables/bell-pepper-4.jpg",
        ],
        productDescription:
            "Bell peppers are a type of pepper that is not spicy. They can be green, red, yellow, or orange. Bell peppers are full of great health benefits—they're packed with vitamins and low in calories! They are an excellent source of vitamin A, vitamin C, and potassium. Bell Peppers also contain a healthy dose of fiber, folate, and iron.",
    },
    {
        id: 13,
        name: "Brinjal",
        price: 100,
        categoryId: 2,
        imageUrl: "/images/products/vegetables/brinjal.jpg",
        quantityInStock: 30,
        unitOfSale: "piece",
        moreImages: [
            "/images/products/vegetables/brinjal-2.jpg",
            "/images/products/vegetables/brinjal-3.jpg",
            "/images/products/vegetables/brinjal-4.jpg",
        ],
        productDescription:
            "Brinjal is a vegetable that is also known as eggplant.",
    },
    {
        id: 14,
        name: "Broccoli",
        price: 180,
        categoryId: 2,
        imageUrl: "/images/products/vegetables/broccoli.jpg",
        quantityInStock: 25,
        unitOfSale: "bunch",
        moreImages: [
            "/images/products/vegetables/broccoli-2.jpg",
            "/images/products/vegetables/broccoli-3.jpg",
            "/images/products/vegetables/broccoli-4.jpg",
        ],
        productDescription:
            "Broccoli, a cabbage of a variety similar to the cauliflower, bearing heads of green or purplish flower buds.",
    },
    {
        id: 15,
        name: "Cabbage",
        price: 90,
        categoryId: 2,
        imageUrl: "/images/products/vegetables/cabbage.jpg",
        quantityInStock: 40,
        unitOfSale: "head",
        moreImages: [
            "/images/products/vegetables/cabbage-2.jpg",
            "/images/products/vegetables/cabbage-3.jpg",
            "/images/products/vegetables/cabbage-4.jpg",
        ],
        productDescription: "Cabbage",
    },
    {
        id: 16,
        name: "Baguette",
        price: 250,
        categoryId: 3,
        imageUrl: "/images/products/breads/baguette.jpg",
        quantityInStock: 40,
        unitOfSale: "pound",
        moreImages: [
            "/images/products/breads/baguette-2.jpg",
            "/images/products/breads/baguette-3.jpg",
            "/images/products/breads/baguette-4.jpg",
        ],
        productDescription: "Baguette is a long, thin loaf of French bread.",
    },
    {
        id: 17,
        name: "Challah",
        price: 300,
        categoryId: 3,
        imageUrl: "/images/products/breads/challah.jpg",
        quantityInStock: 30,
        unitOfSale: "pound",
        moreImages: [
            "/images/products/breads/challah-2.jpg",
            "/images/products/breads/challah-3.jpg",
            "/images/products/breads/challah-4.jpg",
        ],
        productDescription:
            "Rye Bread is a type of bread made with various proportions of flour from rye grain. It can be light or dark in color, depending on the type of flour used and the addition of coloring agents, and is typically denser than bread made from wheat flour.",
    },
    {
        id: 18,
        name: "White Bread",
        price: 200,
        categoryId: 3,
        imageUrl: "/images/products/breads/white-bread.jpg",
        quantityInStock: 45,
        unitOfSale: "pound",
        moreImages: [
            "/images/products/breads/white-bread-2.jpg",
            "/images/products/breads/white-bread-3.jpg",
            "/images/products/breads/white-bread-4.jpg",
        ],
        productDescription:
            "Sliced Bread is a type of bread that is sliced before being packaged for sale in a bag or plastic wrapper and is usually sold in a large bag containing several slices or in a smaller bag containing a single slice or two, which is often sold at a convenience store or supermarket as an inexpensive snack or meal replacement which can be quickly eaten with minimal preparation required.",
    },
    {
        id: 19,
        name: "Whole Wheat Bread",
        price: 180,
        categoryId: 3,
        imageUrl: "/images/products/breads/whole-wheat.jpg",
        quantityInStock: 50,
        unitOfSale: "pound",
        moreImages: [
            "/images/products/breads/whole-wheat-2.jpg",
            "/images/products/breads/whole-wheat-3.jpg",
            "/images/products/breads/whole-wheat-4.jpg",
        ],
        productDescription: "White Bread",
    },
    {
        id: 20,
        name: "Multigrain bread",
        price: 180,
        categoryId: 3,
        imageUrl: "/images/products/breads/multigrain.jpg",
        quantityInStock: 50,
        unitOfSale: "pound",
        moreImages: [
            "/images/products/breads/multigrain-2.jpg",
            "/images/products/breads/multigrain-3.jpg",
            "/images/products/breads/multigrain-4.jpg",
        ],
        productDescription: "White Bread",
    },
    {
        id: 21,
        name: "Sourdough bread",
        price: 180,
        categoryId: 3,
        imageUrl: "/images/products/breads/sourdough.jpg",
        quantityInStock: 50,
        unitOfSale: "pound",
        moreImages: [
            "/images/products/breads/sourdough-2.jpg",
            "/images/products/breads/sourdough-3.jpg",
            "/images/products/breads/sourdough-4.jpg",
        ],
        productDescription: "White Bread",
    },
    {
        id: 22,
        name: "Apple Juice",
        price: 280,
        categoryId: 4,
        imageUrl: "/images/products/juices/apple-juice.jpg",
        quantityInStock: 30,
        unitOfSale: "liter",
        moreImages: [
            "/images/products/juices/apple-juice-2.jpg",
            "/images/products/juices/apple-juice-3.jpg",
            "/images/products/juices/apple-juice-4.jpg",
        ],
        productDescription:
            "Apple juice is a fruit juice made by the maceration and pressing of an apple. The resulting expelled juice may be further treated by enzymatic and centrifugal clarification to remove the starch and pectin, which holds fine particulate in suspension, and then pasteurized for packaging in glass, metal or aseptic processing system containers, or further treated by dehydration processes to a concentrate. Due to the complex and costly equipment required to extract and clarify juice from apples in large volume, apple juice is normally produced commercially.",
    },
    {
        id: 23,
        name: "Strawberry juice",
        price: 320,
        categoryId: 4,
        imageUrl: "/images/products/juices/strawberry-juice.jpg",
        quantityInStock: 20,
        unitOfSale: "liter",
        moreImages: [
            "/images/products/juices/strawberry-juice-2.jpg",
            "/images/products/juices/strawberry-juice-3.jpg",
            "/images/products/juices/strawberry-juice-4.jpg",
        ],
        productDescription:
            "Refreshing and vibrant, strawberry juice is a delightful beverage bursting with the sweet essence of ripe strawberries. Its luscious flavor and bright red hue make it a perfect thirst-quencher, embodying the essence of summer in every sip",
    },
    {
        id: 24,
        name: "Blackberry",
        price: 799,
        categoryId: 1,
        imageUrl: "/images/products/fruits/blackberry.jpg",
        quantityInStock: 20,
        unitOfSale: "pint",
        moreImages: [
            "/images/products/fruits/blackberry-2.jpg",
            "/images/products/fruits/blackberry-3.jpg",
            "/images/products/fruits/blackberry-4.jpg",
        ],
        productDescription:
            "Blueberries are perennial flowering plants with blue– or purple–colored berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries.",
    },
];
