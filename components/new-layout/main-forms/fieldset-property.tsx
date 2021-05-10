import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';

export default function FieldsetSpent() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={80} />
              <fieldset>
                <h3>Suas bens em 2020?</h3>

                <p className="text-muted">
                  Informe abaixo os itens necessários para prosseguir. :)
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12 custom-search">
                      <ul>
                        <li>
                          <button className="custome_select_event active">
                            Imoveis{' '}
                            <span>
                              <i className="far fa-trash-alt "></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event active">
                            Outros Bens
                            <span>
                              <i className="far fa-trash-alt "></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event">
                            Compra de Bens{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event">
                            Venda de bens sem ganho de capital{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event">
                            Heranças{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event">
                            Bens Rurais{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12 search-input">
                      <select className="form-control search_select" required>
                        <option value="Imoveis">Imoveis</option>
                        <option value="Outros Bens">Outros Bens</option>
                        <option value="Compra de Bens">Compra de Bens</option>
                        <option value="Pensao Alimenticia">
                          Venda de bens sem ganho de capital
                        </option>
                        <option value="Aluguel de Imovel">Heranças</option>
                        <option value="Aluguel de Imovel">Bens Rurais</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-gray previous"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    router.push('/2021/financas/dividas');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step6.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/meus-bens/bens-nao-rurais');
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
