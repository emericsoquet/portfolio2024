/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            ...require('tailwindcss/defaultTheme').screens,
            'mb': '420px',
            'xs': '576px'
        },
        fontFamily: {
            'body': ['Inter', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
            'heading': ['Syne', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
            'sub': ['"Clash Grotesk Variable"', 'Inter', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif']
        },
        colors: {
            'title': '#f2f2f2',
            'border': '#eaeaea'
        },
    },
    plugins: [
        function ({addUtilities, theme}) {
            addUtilities({
                '.grid-default': {
                    'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
                    'gap': '24px'
                },
                '.border-top': {
                    borderTop: `1px solid ${theme('colors.border')}`
                },
                '.border-bottom': {
                    borderBottom: `1px solid ${theme('colors.border')}`
                },
                '.border-left': {
                    borderLeft: `1px solid ${theme('colors.border')}`
                },
                '.border-right': {
                    borderRight: `1px solid ${theme('colors.border')}`
                }
            })
        }
    ],
}

