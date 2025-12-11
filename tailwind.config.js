export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['var(--font-league-spartan)', 'sans-serif'],
        'lobster': ['var(--font-lobster)', 'cursive'],
      },
      colors: {
        'base-100': 'rgb(var(--color-base-100) / <alpha-value>)',
        'base-200': 'var(--color-base-200)',
        'base-300': 'var(--color-base-300)',
        'base-content': 'var(--color-base-content)',

        'primary': 'var(--color-primary)',
        'primary-content': 'var(--color-primary-content)',

        'secondary': 'var(--color-secondary)',
        'secondary-content': 'var(--color-secondary-content)',

        'accent': 'var(--color-accent)',
        'accent-content': 'var(--color-accent-content)',

        'neutral': 'var(--color-neutral)',
        'neutral-content': 'var(--color-neutral-content)',

        'info': 'var(--color-info)',
        'info-content': 'var(--color-info-content)',

        'success': 'var(--color-success)',
        'success-content': 'var(--color-success-content)',

        'warning': 'var(--color-warning)',
        'warning-content': 'var(--color-warning-content)',

        'error': 'var(--color-error)',
        'error-content': 'var(--color-error-content)',
      },
    },
  },
  plugins: [],
}
