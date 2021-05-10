/* eslint-disable no-unused-vars */
import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ActionName } from '../../../state/store';

export default function FieldsetDependants() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={0} />
              <fieldset>
                <h3>
                  <FormattedMessage id="new-layout.personal-form.fieldset-dependants.title" />
                </h3>

                <p className="text-muted">
                  <FormattedMessage id="new-layout.personal-form.fieldset-dependants.subtitle" />
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12 custom-search">
                      <ul>
                        <li>
                          <button className="custome_select_event active">
                            Marido/Esposa{' '}
                            <span>
                              <i className="far fa-trash-alt "></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event active">
                            Filha(o) até 21 anos{' '}
                            <span>
                              <i className="far fa-trash-alt "></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event active">
                            Enteada(o) até 21 anos{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event">
                            Filha(o) até 24 anos que esteja cursando o Ensino
                            Médio{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event">
                            Companheira(o) com o qual voce vive há mais de 5
                            anos{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>

                        <li>
                          <button className="custome_select_event">
                            Companheira(o) com o qual voce tem filho{' '}
                            <span>
                              <i className="far fa-plus"></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="custome_select_event active">
                            Alimentando{' '}
                            <span>
                              <i className="far fa-trash-alt "></i>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-12 search-input">
                      <select className="form-control search_select" required>
                        <option value="Dependente 1">Dependente 1</option>
                        <option value="Dependente 2">Dependente 2</option>
                        <option value="Dependente 3">Dependente 3</option>
                        <option value="Dependente 4">Dependente 4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/ocupacao');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/man-right.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/dados-conjuge');
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
