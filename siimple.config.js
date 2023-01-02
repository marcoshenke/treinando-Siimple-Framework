import colors from "@siimple/colors";
import base from "@siimple/preset-base";

export default {
    useRootStyles: true,
    useBorderBox: true,
    prefix: "",
    ...base,
    colors: {
        // ...base.colors,
        primary: "#006EA0",
        secondary: "#4CC5FD",
        tertiary: "#00ADFC",
        quaternary: "#25617D",
        quinary: "#008AC9",
        messiGoat: "#7CB1D9",
        text: colors.gray["800"],
        background: "#fff",
        muted: colors.gray["200"],        
    },
    fonts: {
        body: "'Roboto',sans-serif",
        heading: "'Montserrat',sans-serif",
        code: "monospace",
    },
    sizes: {
        "0": "0px",
        "1": "0.25rem",
        "2": "0.5rem",
        "4": "10rem",
        messiGoat: "40rem",
        cardW: "20rem",
        cardH: "25rem"
        // ...other sizes
    },

    alerts: {
        default: {
            backgroundColor: "tertiary",
            color: "white",
        },

        secondary: {
            backgroundColor: "primary",
            color: "white"
        },
    },
};