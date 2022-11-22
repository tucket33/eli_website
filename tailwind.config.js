/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
          'savbradgta': [
            'name email',
            'subject phone',
            'message message',
          ],
        },
      gridTemplateColumns: {
          'gtc': 'repeat(2, minmax(0, max-content))',
          'gtc2': 'repeat(2, minmax(0, 1fr))',
          'gtc3': 'repeat(1, minmax(0, 1fr))',
      },
      screens: {
        },
      fontFamily: {
          "poppins": ['Poppins', 'sans-serif'],
          "heebo": ['Heebo', 'sans-serif'],
          "play": ['Play', 'sans-serif'],
          "girl": ['The Girl Next Door', 'sans-serif'],
        },
      colors: {
          lsky: "#0ea5e9",
          blue: "#2872CD",
          dgray: "#333",
      },
      // backgroundImage:  {
      //     "hero": "url('/images/gasoline.jpg')",
        
      //     "hand1": "url('./public/images/ulto.webp')",
      //     "revworker": "url('./public/images/revWorker.webp')",
      // },
      // fontFamily: {
      //     sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      // },
  },
  },
  plugins: [],
}
