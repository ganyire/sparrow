import { heroui } from '@heroui/react';
import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: {
                    light: '#deedfd',
                    dark: '#0d83fd',
                },
                secondary: '#0d83fd',
                tertiary: '#f3f9ff',
                foreground: {
                    dark: '#2d465e',
                    mild: '#212529',
                    light: '#636669',
                },
            },
        },
    },

    plugins: [forms(), heroui()],
};
