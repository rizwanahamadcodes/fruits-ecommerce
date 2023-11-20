import { Image } from "./images";

export type User = {
    id: number;
    name: string;
    email: string;
    profileImageId: Image["id"];
};

export const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        profileImageId: 1,
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        profileImageId: 1,
    },
    {
        id: 3,
        name: "Alice Smith",
        email: "alice.smith@example.com",
        profileImageId: 1,
    },
    {
        id: 4,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        profileImageId: 1,
    },
    {
        id: 5,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        profileImageId: 1,
    },
];
