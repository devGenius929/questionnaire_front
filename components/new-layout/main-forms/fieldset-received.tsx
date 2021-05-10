import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';

export default function FieldsetReceived() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <h3>Como recebeu dinheiro em 2020?</h3>

                <p className="text-muted">
                  Informe abaixo os itens necessários para prosseguir. :)
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12 custom-search">
                      <ul>
                        <li>
                          <button className="custome_select_event active">
                            Carteira Assinada{' '}
                            <span>
                              <i className="far fa-trash-alt "></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event active">
                            Propria Empresa
                            <span>
                              <i className="far fa-trash-alt "></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event">
                            Pensao Alimenticia{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12 search-input">
                      <select className="form-control search_select" required>
                        <option value="Certeira">Certeira</option>
                        <option value="Autonomo">Autonomo</option>
                        <option value="Propria Empresa">Propria Empresa</option>
                        <option value="Pensao Alimenticia">
                          Pensao Alimenticia
                        </option>
                        <option value="Aluguel de Imovel">
                          Aluguel de Imovel
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-gray previous"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    router.push('/2021/arrecadacao/');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step6.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/newscreens/gastos');
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
