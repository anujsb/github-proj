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

      'dark': '#0C0C0C',
      'black-grey': '#191919',
      'dark-grey': '#656D76',
      'light-grey': '#9DA6B0',
      '10black': 'rgba(0, 0, 0, 0.1)',
      '10white': 'rgba(255, 255, 255, 0.1)',
      '40white': 'rgba(255, 255, 255, 0.4)',
      '5black': 'rgba(0, 0, 0, 0.1)',
      'mid-grey-bg': '#EBEBEB',
      'light-grey-bg': '#F8F9FA',
      'sec-col': '#F8F9FA',
      'gray-light': '#FBFCFC',
      'pri': '#6072E5',
      'lavender': '#8290EB',
      'light-lavender': '#EBEDFC',
      'success-pri': '#38756F',
      'success-sec': '#CDEDE5',
      'warning-pri': '#7B491B',
      'warning-sec': 'gba(123, 73, 27, 0.8)',
      'warning-bg': '#FFFBE5',
      'red-pri': '#E56060',
      'red-sec': '#FCEBEB',
      
      },


      backgroundImage: {
        'primary-grad-light': 'linear-gradient(90deg, #6072E5 0%, #8290EB 100%)',
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