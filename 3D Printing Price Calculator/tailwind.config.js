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
                "primary": "#000000",
                "secondary": "#3c858b",
                "accent": "#54adb6",
                "neutral": "#14122b",
                "base-100": "#f3e4e2",
                "base-200": "#e2e8f0",
                "base-300": "#e2e8f0",
            },
        },],
    },
}
