module.exports = {
    mode: "jit",
    purge: {
        enabled: true,
        content: ["./public/index.html"]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
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
