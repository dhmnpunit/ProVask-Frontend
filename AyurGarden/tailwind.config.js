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
        green700: '#4B7E65',
        green800: '#4E826A'
      },
      height: {
        hero: '732px',
        features: '1803px',
        "feature-height": '348px',
        "map-feature-section": '784px',
        "mini-map-height": '504px',
        "mini-region-info-height": '504px',
        "featured-games-section": '620px',
        "games-card": '378px',
        "virtual-library": "680px",
        "mini-resource-card": "98px",
        "footer": "200px",
        "learn-hero": "289px",
        "learn-featured-courses": "664px",
        "learn-featured-courses-card": "408px",
        "learn-learning-path": "600px",
        "learn-quick-quiz": "544px",
      },
      width: {
        "feature-width": '996px',
        "mini-map-width": '504px',
        "mini-region-info-width": '444px',
        "games-card": '407px',
        "mini-resource-card": "407px",
        "learn-featured-courses-card": "384px",
        "learn-learning-paths": "384px",
        "learn-library-card": "384px",
        "learn-herb-profile-card": "384px",
        "quick-quiz": "1216px",
        "login-signup-form": "485px",
        
      },
      maxWidth: {
        647: '647px',
        629: '629px',
        "feature-description": '580px'
      },
      fontSize: {
        "14px": '14px',
        "160px": '160px',
      }
    },
  },
  plugins: [],
}

