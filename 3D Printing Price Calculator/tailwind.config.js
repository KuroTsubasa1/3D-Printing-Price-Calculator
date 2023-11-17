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
        themes: ["light", "dark", "forest", {
            HarmTheme: {
                "primary": "#bcdf72",
                "secondary": "#0c3619",
                "accent": "#a3d33c",
                "neutral": "#1f0e3f",
                "base-100": "#120825",
                "base-200": "#351762",
                "base-300": "#6f2ed2",
            },
        },],
    },
}
