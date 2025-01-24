import { heroui } from '@heroui/react';
import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';
import { utilityColors } from './resources/js/lib/utils';
// import utility

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

            keyframes: {
                float: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
                'shapes-float': {
                    '0%, 100%': {
                        transform: 'scale(0.8) rotate(45deg) translateY(0)',
                    },
                    '50%': {
                        transform: 'scale(0.8) rotate(45deg) translateY(-20px)',
                    },
                },
            },

            animation: {
                float: 'float 3s ease-in-out infinite',
                'shapes-float': 'shapes-float 4s ease-in-out infinite',
            },
        },
    },

    plugins: [
        forms(),
        heroui({
            themes: {
                light: {
                    colors: {
                        primary: {
                            foreground: '#fff',
                            DEFAULT: utilityColors.PrimaryDark,
                            light: utilityColors.PrimaryLight,
                            dark: utilityColors.PrimaryDark,
                        },
                        secondary: utilityColors.Secondary,
                        tertiary: utilityColors.Tertiary,
                        foreground: {
                            dark: '#2d465e',
                            mild: '#212529',
                            light: '#636669',
                        },
                    },
                },
            },
        }),
    ],
};
