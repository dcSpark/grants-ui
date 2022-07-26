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
      filterOption: {
        textPrimary: "var(--gui-filter-option-textPrimary)",
        textPrimaryActive: "var(--gui-filter-option-textPrimary-active)",
        textSecondary: "var(--gui-filter-option-textSecondary)",
        textSecondaryActive: "var(--gui-filter-option-textSecondary-active)",
        bgDefault: "var(--gui-filter-option-bgDefault)",
        bgActive: "var(--gui-filter-option-bgActive)",
        bgHover: "var(--gui-filter-option-bgHover)",
        bgSelected: "var(--gui-filter-option-bgSelected)",
        tooltipText: "var(--gui-filter-option-tooltip-text)",
        tooltipBg: "var(--gui-filter-option-tooltip-bg)",
        tooltipIcon: "var(--gui-filter-option-tooltip-icon)",
      },
      select: {
        label: "var(--gui-select-label)",
        buttonBg: "var(--gui-select-button-bg)",
        buttonText: "var(--gui-select-button-text)",
        buttonIcon: "var(--gui-select-button-icon)",
        boxBg: "var(--gui-select-box-bg)",
        boxBgActive: "var(--gui-select-box-bgActive)",
        boxBgHover: "var(--gui-select-box-bgHover)",
        boxText: "var(--gui-select-box-text)",
        boxTextActive: "var(--gui-select-box-textActive)",
        boxTextHover: "var(--gui-select-box-textHover)",
      },
      tabgroup: {
        listBg: "var(--gui-tabgroup-listBg)",
        tabBg: "var(--gui-tabgroup-tabBg)",
        tabBgActive: "var(--gui-tabgroup-tabBgActive)",
        tabText: "var(--gui-tabgroup-tabText)",
        tabTextActive: "var(--gui-tabgroup-tabTextActive)",
      },
      newsCard: {
        bg: "var(--gui-newsCard-bg)",
        title: "var(--gui-newsCard-title)",
        description: "var(--gui-newsCard-description)",
        date: "var(--gui-newsCard-date)",
        link: "var(--gui-newsCard-link)",
        icon: "var(--gui-newsCard-icon)",
      },
    },
    boxShadow: {
      card: "var(--gui-shadow-card)",
      filterOption: "var(--gui-shadow-filter-option)",
      tooltipContent: "var(--gui-shadow-tooltip-content)",
      tabGroup: "var(--gui-shadow-tabgroup)",
    },
    extend: {
      gridTemplateColumns: {
        filterList: "repeat(auto-fit, minmax(160px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
