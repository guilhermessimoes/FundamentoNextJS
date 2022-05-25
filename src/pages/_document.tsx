import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
           <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
           <title> Ig News </title>
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}