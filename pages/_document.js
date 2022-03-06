import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet" />
                <script src="/particles.min.js"></script>
            </Head>
            <body>
                <div id="particle-body"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
