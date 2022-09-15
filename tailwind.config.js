/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                disp: ["Raleway", "sans-serif"],
            },

            colors: {
                lSec: "#ffeb99",
                dSec: "#e6b800",
                lPri: "#8cd9b3",
                dPri: "#2d8659",
            },
        },
    },
    plugins: [],
}
