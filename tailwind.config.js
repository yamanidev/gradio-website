module.exports = {
    mode: "jit",
    purge: {
        enabled: true,
        content: ["./public/index.html"]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            "2xl": { "max": "1516px" },
            xl: { "max": "1260px" },
            lg: { "max": "1100px" },
            md: { "max": "900px" },
            sm: { "max": "800px" }
        },
        container: {
            center: true,
            screens: {
                sm: '800px',
                md: '900px',
                lg: '1100px',
                xl: '1260px',
                '2xl': '1516px'
            }
        },
        extend: {
            colors: {
                "gradio-red": "#C0022F"
            },
            fontFamily: {
                "poppins": "Poppins, sans-serif"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
