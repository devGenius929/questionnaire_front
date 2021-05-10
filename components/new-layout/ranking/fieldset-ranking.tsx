import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';
import TableStatusRanking from './table-status';
import PricesPlans from './prices';

export default function FieldsetRanking() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={100} />
              <fieldset>
                <h3>Resultado</h3>
                <p className="text-muted mb-2">
                  Avalie abaixo as diferentes formas de declaracao do IRPF do
                  seu nucleo familiar.
                </p>
                <p className="text-muted">
                  Clique sobre a opcao desejada para prosseguir!
                </p>
                <div className="resultado-price">
                  <input id="step7_1" name="resultado-price" type="radio" />
                  <label htmlFor="step7_1" className="radio-label step7_1">
                    <ul>
                      <li>
                        <span className="count">1</span>
                        <h4>Mariana Santos</h4>
                        <p>Carolina Santos dependente</p>
                      </li>
                      <li>
                        <h4 className="price">R$ 594,68</h4>
                        <p>Impostos</p>
                      </li>
                    </ul>
                  </label>
                </div>
                <div className="resultado-price">
                  <TableStatusRanking />
                </div>
                <div className="resultado-price">
                  <PricesPlans />
                </div>
                <button
                  className="btn btn-gray previous"
                  data-img="images/step7.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/resultado');
                  }}
                >
                  Voltar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
