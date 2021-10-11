const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const themeStyle = require('./content/data/theme-style.json');

module.exports = {
    presets: [require('@stackbit/components/styles/default/tailwind.default.config.js')],
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/{base,layouts,components}/**/*.{js,ts,jsx,tsx}', './content/**'],
        safelist: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i']
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: themeStyle.primary1
            }

        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                'h1': { fontSize: themeStyle.h1.size, lineHeight: themeStyle.h1.lineHeight },
                'h2': { fontSize: themeStyle.h2.size, lineHeight: themeStyle.h2.lineHeight },
            })
        })
    ]
};
