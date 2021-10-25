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
            lg: { "max": "1004px" },
            md: { "max": "748px" },
            sm: { "max": "630px" }
        },
        container: {

            screens: {
                sm: '620px',
                md: '748px',
                lg: '1004px',
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
