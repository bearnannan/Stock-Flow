/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6', // Blue accent
                secondary: '#64748b', // Slate text
                background: '#f1f5f9', // Light gray background
                surface: '#ffffff', // White surface
                sidebar: '#1e293b', // Dark sidebar
                danger: '#ef4444', // Red
                warning: '#f59e0b', // Amber
                success: '#22c55e', // Green
            },
            fontFamily: {
                sans: ['Prompt', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
