export type User = {
    id: number;
    name: string;
    email: string;
    profileImageUrl: string;
};

export const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        profileImageUrl: "/images/users/john.jpg",
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        profileImageUrl: "",
    },
    {
        id: 3,
        name: "Alice Smith",
        email: "alice.smith@example.com",
        profileImageUrl: "",
    },
    {
        id: 4,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        profileImageUrl: "",
    },
    {
        id: 5,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        profileImageUrl: "",
    },
];
