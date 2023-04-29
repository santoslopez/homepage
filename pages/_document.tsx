import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

function Document() {
  return (
    <Html>
      <Head>
      <Script src="https://apis.google.com/js/platform.js"></Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z22ZVTTNM4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z22ZVTTNM4');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
