import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from 'constants/env'

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en" prefix="og: https://ogp.me/ns#">
        <Head>
          {!!GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');
`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
