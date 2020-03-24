import Head from 'next/head';
import { GA_TRACKING_ID } from '../lib/gtag';

const Meta = (): JSX.Element => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="stylesheet" href="/nprogress.css" />
    <title>
      Covid-19 | Coronavirus disease 2019 (COVID-19) is an infectious disease
      caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)
    </title>

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
          `
      }}
    />
  </Head>
);

export default Meta;
