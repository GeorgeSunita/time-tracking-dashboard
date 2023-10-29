import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link
                    crossOrigin
                    href="https://fonts.gstatic.com"
                    rel="preconnect"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
