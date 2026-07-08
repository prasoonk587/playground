/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            colors: {
                /* ── Semantic ───────────────────────────────── */
                background:  'hsl(var(--background))',
                foreground:  'hsl(var(--foreground))',
                border:      'hsl(var(--border))',
                input:       'hsl(var(--input))',
                muted: {
                    DEFAULT:    'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT:    'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                sidebar: {
                    DEFAULT:            'hsl(var(--sidebar))',
                    foreground:         'hsl(var(--sidebar-foreground))',
                    border:             'hsl(var(--sidebar-border))',
                    accent:             'hsl(var(--sidebar-accent))',
                    'accent-foreground':'hsl(var(--sidebar-accent-foreground))',
                },

                /* ── Palette ────────────────────────────────── */
                primary: {
                    50:  'hsl(var(--primary-50))',
                    100: 'hsl(var(--primary-100))',
                    200: 'hsl(var(--primary-200))',
                    300: 'hsl(var(--primary-300))',
                    400: 'hsl(var(--primary-400))',
                    500: 'hsl(var(--primary-500))',
                    600: 'hsl(var(--primary-600))',
                    700: 'hsl(var(--primary-700))',
                    800: 'hsl(var(--primary-800))',
                    900: 'hsl(var(--primary-900))',
                },
                neutral: {
                    50:  'hsl(var(--neutral-50))',
                    100: 'hsl(var(--neutral-100))',
                    200: 'hsl(var(--neutral-200))',
                    300: 'hsl(var(--neutral-300))',
                    400: 'hsl(var(--neutral-400))',
                    500: 'hsl(var(--neutral-500))',
                    600: 'hsl(var(--neutral-600))',
                    700: 'hsl(var(--neutral-700))',
                    800: 'hsl(var(--neutral-800))',
                    900: 'hsl(var(--neutral-900))',
                },
                success: {
                    50:  'hsl(var(--success-50))',
                    100: 'hsl(var(--success-100))',
                    300: 'hsl(var(--success-300))',
                    500: 'hsl(var(--success-500))',
                    600: 'hsl(var(--success-600))',
                    800: 'hsl(var(--success-800))',
                },
                warning: {
                    50:  'hsl(var(--warning-50))',
                    100: 'hsl(var(--warning-100))',
                    300: 'hsl(var(--warning-300))',
                    500: 'hsl(var(--warning-500))',
                    600: 'hsl(var(--warning-600))',
                    800: 'hsl(var(--warning-800))',
                },
                danger: {
                    50:  'hsl(var(--danger-50))',
                    100: 'hsl(var(--danger-100))',
                    300: 'hsl(var(--danger-300))',
                    500: 'hsl(var(--danger-500))',
                    600: 'hsl(var(--danger-600))',
                    800: 'hsl(var(--danger-800))',
                },
                info: {
                    50:  'hsl(var(--info-50))',
                    100: 'hsl(var(--info-100))',
                    300: 'hsl(var(--info-300))',
                    500: 'hsl(var(--info-500))',
                    600: 'hsl(var(--info-600))',
                    800: 'hsl(var(--info-800))',
                },
            },
        },
    },
    plugins: [],
};
