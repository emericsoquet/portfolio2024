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
            padding: {
                DEFAULT: '12px',
            }
        },
        screens: {
            ...require('tailwindcss/defaultTheme').screens,
            'mb': '420px',
            'xs': '576px',
            '2xl': '1420px'
        },
        fontFamily: {
            'body': ['Roboto', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
            'heading': ['Syne', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
            'sub': ['"Clash Grotesk Variable"', 'Roboto', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif']
        },
        colors: {
            'title': '#f2f2f2',
            'border': '#eaeaea',
            'base': '#f4f4f5',
            'error': '#f01d24',
            'projectBg': '#181717'
        },
    },
    plugins: [
        function ({addUtilities, theme}) {
            addUtilities({

                // main grid for project
                '.grid-default': {
                    'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
                    'gap': '24px'
                },

                // call quickly a border by a class
                '.border-top': {
                    borderTop: `1px solid var(--border-color, ${theme('colors.border')})`
                },
                '.border-bottom': {
                    borderBottom: `1px solid var(--border-color, ${theme('colors.border')})`
                },
                '.border-left': {
                    borderLeft: `1px solid var(--border-color, ${theme('colors.border')})`
                },
                '.border-right': {
                    borderRight: `1px solid var(--border-color, ${theme('colors.border')})`
                }
            })
        }
    ],
}

