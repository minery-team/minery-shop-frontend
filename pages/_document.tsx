import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://cdn.iamport.kr/v1/iamport.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <div id="modal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
