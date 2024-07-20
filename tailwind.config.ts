import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: "var(--dark)",
        "black-grey": "var(--black-grey)",
        "dark-grey": "var(--dark-grey)",
        "light-grey": "var(--light-grey)",
        "10black": "var(--10black)",
        "10white": "var(--10white)",
        "40white": "var(--40white)",
        "5black": "var(--5black)",
        "mid-grey-bg": "var(--mid-grey-bg)",
        "light-grey-2": "var(--light-grey-2)",
        "light-grey-bg": "var(--light-grey-bg)",
        "sec-col": "var(--sec-col)",
        "gray-light": "var(--gray-light)",
        pri: "var(--pri)",
        lavender: "var(--lavender)",
        "light-lavender": "var(--light-lavender)",
        "success-pri": "var(--success-pri)",
        "success-sec": "var(--success-sec)",
        "warning-pri": "var(--warning-pri)",
        "warning-sec": "var(--warning-sec)",
        "warning-bg": "var(--warning-bg)",
        "red-pri": "var(--red-pri)",
        "red-sec": "var(--red-sec)",
      },
      backgroundImage: {
        'primary-grad-light-bg': 'linear-gradient(0deg, #6072E5 0%, #8290EB 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
