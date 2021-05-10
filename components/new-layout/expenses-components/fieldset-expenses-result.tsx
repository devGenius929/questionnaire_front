import * as React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';

export default function FieldsetResult() {
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
                  <input
                    id="1"
                    name="Sim"
                    type="radio"
                    className="resultado_step6"
                    value="R$ 594,68"
                  />
                  <label htmlFor="1" className="radio-label">
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
                  <input
                    id="2"
                    name="Sim"
                    type="radio"
                    className="resultado_step6"
                    value="R$ 594,68"
                  />
                  <label htmlFor="2" className="radio-label">
                    <ul>
                      <li>
                        <span className="count">2</span>
                        <h4>Mariana Santos</h4>
                        <p>Carolina Santos dependente</p>
                      </li>
                      <li>
                        <h4 className="price">R$ 594,68</h4>
                        <p>Impostos</p>
                      </li>
                    </ul>
                  </label>
                  <input
                    id="3"
                    name="Sim"
                    type="radio"
                    className="resultado_step6"
                    value="R$ 594,68"
                  />
                  <label htmlFor="3" className="radio-label">
                    <ul>
                      <li>
                        <span className="count">3</span>
                        <h4>Mariana Santos</h4>
                        <p>Carolina Santos dependente</p>
                      </li>
                      <li>
                        <h4 className="price">R$ 594,68</h4>
                        <p>Impostos</p>
                      </li>
                    </ul>
                  </label>
                  <input
                    id="4"
                    name="Sim"
                    type="radio"
                    className="resultado_step6"
                    value="R$ 594,68"
                  />
                  <label htmlFor="4" className="radio-label">
                    <ul>
                      <li>
                        <span className="count">4</span>
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
                <button
                  className="btn btn-gray previous"
                  data-img="images/step6.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step7.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/ranking');
                  }}
                >
                  Continuar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
