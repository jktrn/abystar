const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
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
                gray: colors.neutral,
                pyro: '#bf612d',
                geo: '#c8922b',
                dendro: '#84a02f',
                anemo: '#5d9b86',
                hydro: '#3d9bc1',
                cryo: '#7fabb6',
                electro: '#8c729a',
            },
        },
    },
    plugins: [],
}
