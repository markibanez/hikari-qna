import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <script src="/particles.min.js"></script>
            </Head>
            <body id="particle-body">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
