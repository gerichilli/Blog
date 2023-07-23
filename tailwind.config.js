/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        extend: {
            screens: {
                dark: { raw: '(prefers-color-scheme: dark)' },
            },
            colors: {
                primary: 'rgba(var(--primary-rgb), <alpha-value>)',
                secondary: 'rgba(var(--secondary-rgb), <alpha-value>)',
                tertiary: 'rgba(var(--tertiary-rgb), <alpha-value>)',
            },
        },
    },
    plugins: [],
};
