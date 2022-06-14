module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                // 'primary': '#f58220',
                // 'secondary': '#006131',
                'custom-primary': '#f58220',
                'custom-primary-dark': '#CC640B',
                'custom-secondary': '#006131',
            },
            // screens: {
            //   'sm': {'min': '640px', 'max': '767px'},
            //   'md': {'min': '768px', 'max': '1023px'},
            //   'lg': {'min': '1024px', 'max': '1279px'},
            //   'xl': {'min': '1280px', 'max': '1535px'},
            //   '2xl': {'min': '1536px'},
            // }
        },
    },
    plugins: [
    require('tailwind-scrollbar-hide')
    ],
};