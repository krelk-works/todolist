module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                'bg-blink': {
                    '0%, 49%': { backgroundColor: '#ffffff' },
                    '50%, 100%': { backgroundColor: '#ef4444' }, // red-500
                },
                'shrink-x': {
                    '0%': { width: '100%' },
                    '100%': { width: '0%' },
                },
            },
            animation: {
                'bg-blink': 'bg-blink 1s steps(2) infinite',
                'shrink-x': 'shrink-x var(--dur,3s) linear both',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
