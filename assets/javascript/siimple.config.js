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
        "5": "12rem",        
        p: "1.75vw",
        messiGoat: "40rem",
        cardW: "20vw",
        cardH: "30vh",
        button: "35vw",
        rem2: "2rem",
        vw80: "80vw",
        vh18: "18vh",

        // ...other sizes
    },
    layout: {
        container: {
            maxWidth: "1264px",
        },
        container2: {
            maxWidth: "750px",
        },
        card: {
            fontSize: "1vw",
            padding: "1rem",
        }
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
    breakpoints: {
        mobile: {
            max: "600px",
        },
        tablet: {
            min: "715px",
        },
        desktop: {
            min: "1200px",
        },
    },

    styles: {
        "h1": {
            
            fontSize: "4.5vw",
        },
        "p": {
            fontSize: "min(50px, 4vw)"
        },
        
        ".has-size-p-pagcolors": {
            fontSize: "1.5vw"
        },
        ".has-size-dropdown": {
            fontSize: "1.35vw"
        },

        ".has-w-img-pagcolors": {
            width: "24vw"
        },
        ".has-size-title": {
            fontSize: "min(70px, 6vw)"
        },
    },    
    
    space: {
            "0": "0px",
            "1": "0.25rem",
            "2": "0.5rem",
            "4": "1rem",
            "5": "1.5rem",
            "6": "2rem"
            // ...other sizes
        },
        
    forms: {
        label: {
                color: "inherit",
                fontWeight: "bold",
                fontSize: "min(50px, 4vw)",
            },
        },
        
        button: {
            default: {
                fontSize: "min(50px, 4vw)",
            },
            
        },

   
    //
};