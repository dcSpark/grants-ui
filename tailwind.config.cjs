/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "gui-", // use `gui-` prefix for tailwind classes
  theme: {
    colors: {
      primaryText: "var(--gui-text-primary)",
      secondaryText: "var(--gui-text-secondary)",
      card: "var(--gui-bg-card)",
      borderTabs: "var(--gui-border-tabs)",
      borderTab: "var(--gui-border-tab)",
      accentColor: "var(--gui-accent-color)",
      dashedBorder: "var(--gui-dashed-border)",
      linkIcon: "var(--gui-link-icon)",
      arrowIcon: "var(--gui-arrow-icon)",
      status: {
        text: "var(--gui-status-text)",
        completed: "var(--gui-status-completed)",
        ongoing: "var(--gui-status-ongoing)",
        canceled: "var(--gui-status-canceled)",
        default: "var(--gui-status-default)",
      },
    },
    boxShadow: {
      card: "var(--gui-shadow-card)",
    },
  },
  plugins: [],
};
