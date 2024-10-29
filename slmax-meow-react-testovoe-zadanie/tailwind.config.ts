import type {Config} from "tailwindcss";

const config: {
    plugins: { handler: () => void }[];
    theme: {
        extend: { gridTemplateRows: { "[auto,auto,1fr]": string }; colors: { background: string; foreground: string } }
    };
    content: string[]
} = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio'),],
};

export default config;
