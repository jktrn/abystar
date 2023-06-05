const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            main: {
                500: '#353535',
                600: '#303030',
                700: '#1D1D1D',
                800: '#171717',
                900: '#111111',
                1000: '#0C0C0C',
            },
            lightgray: {
                100: '#C9CACC',
                200: '#8D8D8F',
            },
            gray: colors.stone,
        },
    },
    plugins: [],
}
