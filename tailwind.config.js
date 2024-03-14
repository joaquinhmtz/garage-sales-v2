/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // Define a Tailwind CSS plugin
    require('@tailwindcss/forms'),
    plugin(({ addVariant, e }) => {
      // Add a custom variant, "sidebar-expanded"
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            // Modify selectors to apply the custom variant
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
};
