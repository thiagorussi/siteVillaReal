import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: "#5B5FEF",
            light: "#8084FF",
            dark: "#4045CC",
        },
        secondary: {
            main: "#3A3A3A",
            light: "#5C5C5C",
            dark: "#1E1E1E",
        },
        background: {
            default: "#FFFFFF",
            paper: "#F5F7FF",
        },
        text: {
            primary: "#1A1A1A",
            secondary: "#4A4A4A",
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: "4.5rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
        },
        h2: {
            fontSize: "3.5rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
        },
        h3: {
            fontSize: "2.5rem",
            fontWeight: 600,
        },
        body1: {
            fontSize: "1.125rem",
            lineHeight: 1.6,
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "15px",
                    textTransform: "none",
                    fontSize: "1.125rem",
                    padding: "12px 32px",
                    //boxShadow: "0 4px 14px 0 rgba(91, 95, 239, 0.39)",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                
                    boxShadow: "0 10px 30px 0 rgba(91, 95, 239, 0.1)",
                },
            },
        },
    },
})

export default theme