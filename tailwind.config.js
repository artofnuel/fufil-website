/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d52633",
        "primary-content": "#fefcfc",
        "primary-dark": "#aa1e29",
        "primary-light": "#e04e59",

        secondary: "#d57026",
        "secondary-content": "#000000",
        "secondary-dark": "#aa591e",
        "secondary-light": "#e08c4e",

        background: "#f4ebec",
        foreground: "#fcfafa",
        border: "#e9d6d7",

        copy: "#321b1c",
        "copy-light": "#85474c",
        "copy-lighter": "#af6a6f",

        success: "#26d526",
        warning: "#d5d526",
        error: "#d52626",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#fefcfc",
      },
    },
  },
  plugins: [],
};
