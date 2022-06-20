module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}", "./*{html,js}"],
    purge: ["./src/**/*.{html,js}", "./*{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--hue), 100%, 26%)",
                headline: "hsl(210, 11%, 15%)",
                paragraph: "hsl(210, 9%, 31%)",
                brand_beige: "hsl(39, 100%, 97%)",
                brand_light: "hsl(calc(var(--hue) - 22), 23%, 89%)",
                brand_dark: "hsl(var(--hue), 100%, 14%)",
                bg_light: "hsl(calc(var(--hue) + 10), 14%, 97%)",
            },
            fontFamily: {
                sans: ["DM Sans"],
            },
            spacing: {
                '16px': '16px',
                '32px': '32px'
            }
        },
    },
    plugins: [],
};
