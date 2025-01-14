import { FaBreadSlice } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa6";
import { GiShinyApple } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { SiAppstore } from "react-icons/si";

export type Category = {
    id: number;
    value: string;
    label: string;
    imageUrl: string;
    icon: IconType;
};

export const categories: Category[] = [
    {
        id: 0,
        value: "",
        label: "All",
        imageUrl: "",
        icon: SiAppstore,
    },
    {
        id: 1,
        value: "fruits",
        label: "Fruits",
        imageUrl: "/images/icons/i1.png",
        icon: GiShinyApple,
    },
    {
        id: 2,
        value: "vegetable",
        label: "Vegetable",
        imageUrl: "/images/icons/i2.png",
        icon: FaCarrot,
    },
    {
        id: 3,
        value: "breads",
        label: "Breads",
        imageUrl: "/images/icons/i3.png",
        icon: FaBreadSlice,
    },
    {
        id: 4,
        value: "juices",
        label: "Juices",
        imageUrl: "/images/icons/i4.png",
        icon: GiShinyApple,
    },
];
