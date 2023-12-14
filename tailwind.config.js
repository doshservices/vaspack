/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      screens: {
        'xxl': '1350px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'ssm': '420px'
      },
      colors: {
        'Primary':'#006215',
        'Secondary':'#0A8E26',  
        'NormalWhite':'#FFFFFF',
        'OtherWhite':'#F8F8F8',
          'Gray':'#F4F1F8',
          'OtherGreen':'#8BDA27',
          'LightYellow':'#FFFBF5',
          'FooterBlack':'#2D2D2D',
          'OtherBlack':'#2D2D2D'
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}
