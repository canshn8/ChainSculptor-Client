/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'slide-in': 'slideIn 1s ease-out',
          fadeIn: 'fadeIn 1.5s ease-out',
          fadeUp: 'fadeUp 1.5s ease-out',
          titleUp: 'titleUp 2s ease-out',
          particleAnimation: 'particleAnimation 4s linear infinite',
        },
        keyframes: {
          slideIn: {
            '0%': { opacity: 0, transform: 'translateY(-900px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          fadeUp: {
            '0%': { transform: 'translateY(30px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          titleUp: {
            '0%': { transform: 'translateY(100px)', opacity: 0 },
            '50%': { transform: 'translateY(30px)', opacity: 0.6 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          particleAnimation: {
            '0%': { transform: 'translateY(0) scale(0.5)', opacity: 1 },
            '100%': { transform: 'translateY(-100vh) scale(1)', opacity: 0 },
          },
        },
        colors: {
          bej: "#F5F1E3",
          input: "#D8C3A5",
          darkBrown: "#4B3F3B",
          background: "#FFF8E1",
          navLink:"#CBAA77",
          cardBg: "#FAF3E0",
          cardHd : "#5C4F43", 
          cardTitle: "#3C2A23",
          cardTxt: "#222831",
          cardInfo: "#A49B8C",
          cardBorder: "#D8CAB8",
          cardHover: "#D7C4A7",
          cardBtnNtr: "#D7C4A7",
          cardBtnHvr: "#FAF3E0",
          cardBtnScs: "#A8D08D",
          cardBtnWr: "#E57373",
          beige: '#F4E1C1',
          primary: '#6C4F3D',
          },
      },
    },
    plugins: [],
  };
  