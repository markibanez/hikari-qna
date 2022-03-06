import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

import '../styles/globals.css';

const theme = createTheme({
    typography: {
        fontFamily: `"Cinzel Decorative"`,
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 400,
        fontWeightMedium: 700,
    },
    shape: {
        borderRadius: 15,
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
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider preventDuplicate>
                <Component {...pageProps} />
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default MyApp;
