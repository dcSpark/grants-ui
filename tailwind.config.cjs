/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "gui-", // use `gui-` prefix for all generated classes
  theme: {
    colors: {
      primaryText: "var(--text-primary)",
      secondaryText: "var(--text-secondary)",
      card: "var(--bg-card)",
      borderTabs: "var(--border-tabs)",
      borderTab: "var(--border-tab)",
      white: "#fff",
      status: {
        completed: "var(--status-completed)",
        ongoing: "var(--status-ongoing)",
        canceled: "var(--status-canceled)",
        default: "var(--status-default)",
      },
      orange: {
        600: "#ff9828",
        800: "#8A6534",
      },
      gray: {
        50: "#FFF4DB",
        500: "#808080",
        600: "#353944",
        700: "#232129",
        800: "#010a12",
      },
    },
    boxShadow: {
      card: "var(--shadow-card)",
    },
  },
  plugins: [],
};
