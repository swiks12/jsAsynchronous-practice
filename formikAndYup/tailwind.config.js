/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'dark-purple':'#581c87'
      },
      backgroundImage:{
        'page-not-found':"url('https://static.vecteezy.com/system/resources/previews/024/116/291/non_2x/utility-pole-on-dreamy-night-sky-error-404-flash-message-electrical-cable-empty-state-ui-design-lofi-background-page-not-found-cartoon-image-flat-illustration-concept-synthwave-aesthetics-vector.jpg')",
      }
    },
  },
  plugins: [],
}

