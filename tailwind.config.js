const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('daisyui'),
    ],
    daisyui: {
      styled: true,
      themes: [{
        'bloodyDracula': {
          "primary": "#ff9580",
          "primary-focus": "#FF6C4F",
          "primary-content": "#1d1e25",
          "secondary": "#b9ffb3",
          "secondary-focus": "#8aff80",
          "secondary-content": "#1d1e25",
          "accent": "#ffffb3",
          "accent-focus": "#ffff80",
          "accent-content": "#1d1e25",
          "neutral": "#22212c",
          "neutral-focus": "#1d1e25",
          "neutral-content": "#d5ccff",
          "base-100": "#302f3d",
          "base-200": "#22212c",
          "base-300": "#1d1e25",
          "base-content": "#d5ccff",
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724"
        }
      }],
      base: true,
      utils: true,
    }
};
