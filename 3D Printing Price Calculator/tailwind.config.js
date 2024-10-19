/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", {
            accessibleTheme: {
                "primary": "#1a202c",
                "secondary": "#2d3748",
                "accent": "#4a5568",
                "neutral": "#718096",
                "base-100": "#f7fafc",
                "base-200": "#edf2f7",
                "base-300": "#e2e8f0",
            },
        },],
    },
}
