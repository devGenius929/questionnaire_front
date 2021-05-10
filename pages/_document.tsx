import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { GTM_ID } from '../utils/config';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="title"
            content="DeclareCerto - A maneira inteligente de cuidar do seu Imposto de Renda."
          />
          <meta
            name="keywords"
            content="IRPF, Imposto de Renda, Declaração, Declare Certo, declarecerto, declarecerto.com.br, como declarar, declarar, declarar imposto, declare, deduzir, IRPF 2020, IRPF 2021, Imposto de Renda Pessoa Fisica, Receita Federal"
          />
          <meta
            name="Description"
            content="O DeclareCerto é o serviço brasileiro online de auxílio à preparação da declaração anual de imposto de renda de pessoa física. A solução é ideal para quem quer fazer uma declaração correta, através de um processo amigável, e ainda alcançar a máxima dedução do imposto de sua família, mesmo sem ser especialista em imposto de renda"
          />
          <meta httpEquiv="Content-Language" content="pt-br" />
          <meta name="language" content="pt-br" />
          <meta name="subject" content="Financeiro" />
          <meta name="Author" content="DeclareCerto" />
          <meta name="MSNBOT" content="noindex, nofollow" />
          <meta name="GOOGLEBOT" content="noindex, nofollow" />
          <meta name="ROBOTS" content="noindex, nofollow" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          {/* End Google Tag Manager */}
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
