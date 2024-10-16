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
            center: true
        }
    },
    screens: {
        'mb': '420px',
        'xs': '576px'
    },
    plugins: [
        function ({addUtilities}) {
            addUtilities({
                '.grid-default': {
                    'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
                    'gap': '24px'
                }
            })
        }
    ],
}

