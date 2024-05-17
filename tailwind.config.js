const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    /** other settings */
    plugins: [
        plugin(function({ addVariant }) {
            addVariant('active', '&.active');
        })
    ],
}