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
        profileImageUrl: "/images/users/user-1.jpg",
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        profileImageUrl: "/images/users/user-2.jpg",
    },
    {
        id: 3,
        name: "Alice Smith",
        email: "alice.smith@example.com",
        profileImageUrl: "/images/users/user-3.jpg",
    },
    {
        id: 4,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        profileImageUrl: "/images/users/user-4.jpg",
    },
    {
        id: 5,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        profileImageUrl: "/images/users/user-5.jpg",
    },
    {
        id: 6,
        name: "Eva Green",
        email: "eva.green@example.com",
        profileImageUrl: "/images/users/user-6.jpg",
    },
    {
        id: 7,
        name: "Frank White",
        email: "frank.white@example.com",
        profileImageUrl: "/images/users/user-7.jpg",
    },
    {
        id: 8,
        name: "Grace Miller",
        email: "grace.miller@example.com",
        profileImageUrl: "/images/users/user-8.jpg",
    },
    {
        id: 9,
        name: "Harry Turner",
        email: "harry.turner@example.com",
        profileImageUrl: "/images/users/user-9.jpg",
    },
];
