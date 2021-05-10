import * as React from 'react';
import Head from 'next/head';
import DefaultTheme from './themes';
import { Session } from '../typing';

interface HomeProps {
  session: Session;
}

export default function Home({ session }: HomeProps) {
  return (
    <DefaultTheme session={session}>
      <Head>
        <title>
          A maneira inteligente de cuidar do seu imposto de renda, IRPF2021
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>
        Bem-vindo à solução de auxílio à preparação da declaração anual do
        IRPF2021 do DeclareCerto®
      </h1>

      <h5>
        Estas são as seções que você terá de passar para a solução gerar todas
        as possíveis formas de declaração de IR da sua família.
      </h5>
      <ul className="listacomiconessist">
        <li>
          <img
            src="/images/declaracao/icones/infopessoais.jpg"
            width="103"
            height="96"
            alt="Informações Pessoais"
          />
          <div className="conttxtsist">
            <h2>Informações pessoais</h2>
            <p>
              <a href="/informacao-pessoal">
                Onde o sistema entende quem compõe o seu núcleo familiar, bem
                como algumas informações pessoais destas pessoas que são
                necessárias na hora de declarar.
              </a>
            </p>
          </div>
        </li>
        <li>
          <img
            src="/images/declaracao/icones/declaracao.jpg"
            width="103"
            height="96"
            alt="Declaração"
          />
          <div className="conttxtsist">
            <h2>Declaração</h2>
            <p>
              <a href="/declaracoes">
                Alimentação das informações de rendimentos, despesas, bens e
                dívidas da sua família.
              </a>
            </p>
          </div>
        </li>
        <li>
          <img
            src="/images/declaracao/icones/resumo.jpg"
            width="103"
            height="96"
            alt="Resumo e Verificaçã"
          />
          <div className="conttxtsist">
            <h2>Resumo e Verificação</h2>
            <p>
              <a href="/resumo">
                Revisão dos dados alimentados e análise de inconsistências e
                críticas apontadas pelo sistema.
              </a>
            </p>
          </div>
        </li>
        <li>
          <img
            src="/images/declaracao/icones/ranking.jpg"
            width="103"
            height="96"
            alt="Resultado / Ranking"
          />
          <div className="conttxtsist">
            <h2>Resultado / Ranking</h2>
            <p>
              <a href="/resultado/ranking">
                Listagem das possíveis formas de declaração do núcleo familiar e
                seleção da opção desejada.
              </a>
            </p>
          </div>
        </li>
      </ul>

      <div className="clearall">
        <br />
      </div>

      <a
        href="/informacao-pessoal"
        className="btncomecar"
        id="inicioBtnComecar"
      >
        <img
          src="/images/declaracao/btncomecar.jpg"
          width="678"
          height="61"
          alt="começar"
        />
      </a>

      <div className="clearall">
        <br />
        <br />
      </div>
    </DefaultTheme>
  );
}
