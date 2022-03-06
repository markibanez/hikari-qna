import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/globals.css';

const theme = createTheme({
    shape: {
        borderRadius: 15
    },
    palette: {
        background: {
            default: '#63666A',
            paper: '#63666A',
        },
        text: {
            primary: '#E6EEF7'
        },
        primary: {
            main: '#E6EEF7'
        },
        secondary: {
            main: '#FFF'
        },
        action: {
            active: '#FFF'
        },

    }
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
