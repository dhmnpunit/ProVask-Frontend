/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#004724',
        primary: '#E9EFEC',
        green200: '#C4DAD2',
        green600: '#366E52',
        green700: '#4B7E65'
      },
      height: {
        hero: '732px',
        features: '1803px',
        "feature-height": '348px',
        "map-feature-section": '784px',
        "mini-map-height": '504px',
        "mini-region-info-height": '504px'
      },
      width: {
        "feature-width": '996px',
        "mini-map-width": '504px',
        "mini-region-info-width": '444px'
      },
      maxWidth: {
        647: '647px',
        629: '629px',
        "feature-description": '580px'
      }
    },
  },
  plugins: [],
}

