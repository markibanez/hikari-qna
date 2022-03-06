import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/globals.css';

const theme = createTheme({
    shape: {
        borderRadius: 15
    },
    palette: {
        // background: {
        //     default: '#FFF',
        //     paper: '#FFF',
        // },
        // text: {
        //     primary: '#000'
        // },
        // primary: {
        //     main: '#E6EEF7'
        // },
        // secondary: {
        //     main: '#FFF'
        // },
        // action: {
        //     active: '#FFF'
        // },

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
