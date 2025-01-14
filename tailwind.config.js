/** @type {import('tailwindcss').Config} */

const config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        spacing: () => {
            const spacing = {};

            for (let i = 0; i <= 20; i += 0.25) {
                spacing[i] = `${i}rem`;
            }

            spacing["navHeight"] = "5rem";
            spacing["svh-screen"] = "100svh";
            spacing["breadcrumbHeight"] = "3rem";
            spacing["btn-height-medium"] = "3rem";
            spacing["btn-height-medium/2"] = "1.5rem";
            spacing["btn-height-small"] = "2rem";
            spacing["btn-height-small/2"] = "1rem";

            return spacing;
        },
        borderRadius: () => {
            const borderRadius = {};

            for (let i = 0; i <= 10; i += 0.25) {
                borderRadius[i] = `${i}rem`;
            }

            borderRadius["none"] = `0`;
            borderRadius["full"] = `9999px`;

            return borderRadius;
        },
        fontSize: () => {
            const fontSize = {};

            for (let i = 0; i <= 10; i += 0.25) {
                fontSize[i] = `${i}rem`;
            }

            return fontSize;
        },
        lineHeight: () => {
            const lineHeight = {};

            for (let i = 0; i <= 5; i += 0.25) {
                lineHeight[i] = `${i}`;
            }

            return lineHeight;
        },
        colors: {
            transparent: "transparent",
            white: "#fff",
            black: "#000",
            primary: {
                50: "hsl(89, 100%, 95%)",
                100: "hsl(92, 100%, 88%)",
                200: "hsl(92, 100%, 78%)",
                300: "hsl(95, 100%, 66%)",
                400: "hsl(97, 99%, 55%)",
                500: "hsl(98, 100%, 45%)",
                600: "hsl(100, 100%, 36%)",
                DEFAULT: "hsl(100, 100%, 30%)",
                800: "hsl(101, 88%, 23%)",
                900: "hsl(101, 79%, 20%)",
                950: "hsl(104, 100%, 10%)",
            },

            gray: {
                50: "hsla(105deg, 5%, 95%, 1)",
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
                "gray-500-border": "0 0 0 4px hsla(105deg, 5%, 50%, 0.5)",
                "gray-900-border": "0 0 0 4px hsla(105deg, 5%, 10%, 0.5)",
                "danger-border": "0 0 0 4px hsla(0deg, 100%, 50%, 0.6)",
                "success-border": "0 0 0 4px hsla(120deg, 100%, 40%, 0.6)",
            },
            minHeight: () => {
                const lineHeight = {};

                for (let i = 0; i <= 5; i += 0.25) {
                    lineHeight[i] = `${i}rem`;
                }

                return lineHeight;
            },
        },

        fontFamily: {
            sans: ["Montserrat", "system-ui"],
        },
    },
    plugins: [],
};
export default config;
