/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        spacing: {
            0: "0",
            "1px": "1px",
            "2px": "2px",
            0.25: "0.25rem",
            0.5: "0.5rem",
            0.75: "0.75rem",
            1: "1rem",
            1.5: "1.5rem",
            2: "2rem",
            2.5: "2.5rem",
            3: "3rem",
            4: "4rem",
            5: "5rem",
            6: "6rem",
            7: "7rem",
            8: "8rem",
            9: "9rem",
            10: "10rem",
            11: "11rem",
            12: "12rem",
            13: "13rem",
            14: "14rem",
            15: "15rem",
            16: "16rem",
            17: "17rem",
            18: "18rem",
            19: "19rem",
            20: "20rem",
            21: "21rem",
            22: "22rem",
            23: "23rem",
            24: "24rem",
            25: "25rem",
            30: "30rem",
            35: "35rem",
            navHeight: "5rem",
        },
        borderRadius: {
            0.25: "0.25rem",
            DEFAULT: "0.5rem",
            0.75: "0.75rem",
            1: "1rem",
            2: "2rem",
            3: "3rem",
            4: "4rem",
            5: "5rem",
            6: "6rem",
            7: "7rem",
            8: "8rem",
            9: "9rem",
            10: "10rem",
            full: "9999px",
        },
        fontSize: {
            0.25: "0.25rem",
            0.5: "0.5rem",
            0.75: "0.75rem",
            1: "1rem",
            1.25: "1.25rem",
            1.5: "1.5rem",
            2: "2rem",
            3: "3rem",
            3.5: "3.5rem",
            4: "4rem",
            5: "5rem",
            6: "6rem",
            7: "7rem",
            8: "8rem",
            9: "9rem",
            10: "10rem",
        },
        lineHeight: {
            1: "1",
            1.5: "1.5",
        },
        colors: {
            white: "#fff",
            black: "#000",
            primary: {
                400: "hsla(84deg, 100%, 42%, 1)",
                DEFAULT: "hsla(105deg, 99%, 29%, 1)",
                600: "hsla(120deg, 100%, 21%, 1)",
            },
            gray: {
                100: "hsla(105deg, 5%, 90%, 1)",
                200: "hsla(105deg, 5%, 80%, 1)",
                300: "hsla(105deg, 5%, 70%, 1)",
                400: "hsla(105deg, 5%, 60%, 1)",
                500: "hsla(105deg, 5%, 50%, 1)",
                600: "hsla(105deg, 5%, 40%, 1)",
                700: "hsla(105deg, 5%, 30%, 1)",
                800: "hsla(105deg, 5%, 20%, 1)",
                900: "hsla(105deg, 5%, 10%, 1)",
            },
        },
        extend: {
            boxShadow: {
                soft: "0 1px 4px 0 rgba(0,0,0,0.1)",
                "soft-left": "-1px 0px 4px 0 rgba(0,0,0,0.1)",
                "primary-border": "0 0 0 4px hsla(105deg, 99%, 29%, 0.5)",
                "danger-border": "0 0 0 4px hsla(0deg, 100%, 50%, 0.6)",
                "success-border": "0 0 0 4px hsla(120deg, 100%, 40%, 0.6)",
            },
        },

        fontFamily: {
            sans: ["Montserrat", "system-ui"],
            dancing: ["Dancing Script"],
        },
    },
    plugins: [],
};
