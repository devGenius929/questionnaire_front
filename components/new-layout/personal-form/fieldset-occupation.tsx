import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ActionName } from '../../../state/store';

export default function FieldsetOcupation() {
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
                  <FormattedMessage id="new-layout.personal-form.fieldset-occupation.title" />
                </h3>

                <p className="text-muted">
                  <FormattedMessage id="new-layout.personal-form.fieldset-occupation.subtitle" />
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-8  search-input">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                        title="Qual sua ocupacao/profissao?"
                      >
                        Natureza da Ocupação?
                      </label>
                      <select
                        className=" form-control search_select input-edited"
                        required
                      >
                        <option value="example">example</option>
                        <option value="example 1">example 1</option>
                        <option value="example 2">example 2</option>
                        <option value="example 3">example 3</option>
                        <option value="example 4">example 4</option>
                      </select>
                    </div>

                    <div className="col-sm-8  search-input">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                        title="Qual sua ocupacao/profissao?"
                      >
                        Ocupação Principal?
                      </label>
                      <select
                        className=" form-control search_select input-edited"
                        required
                        value={useSelector(
                          (state) => state.declarant.occupation,
                        )}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdateDeclarant,
                            payload: {
                              occupation: {
                                occupation: e.target.value,
                                nature: '',
                              },
                            },
                          });
                        }}
                      >
                        <option value="example">example</option>
                        <option value="example 1">example 1</option>
                        <option value="example 2">example 2</option>
                        <option value="example 3">example 3</option>
                        <option value="example 4">example 4</option>
                      </select>
                    </div>

                    <div className="col-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Registro Profissional
                      </label>
                      <input
                        type="text"
                        id="name6"
                        className="form-control"
                        placeholder="Registro Profissional"
                      />
                    </div>

                    <div className="col-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Recibo Ano Anterior
                      </label>
                      <input
                        type="text"
                        id="name6"
                        className="form-control"
                        placeholder="Recibo Ano Anterior"
                      />
                    </div>

                    <div className="col-sm-12 m-auto checkbox-input">
                      <input type="checkbox" name="checkbox1" id="checkbox1" />
                      <label htmlFor="checkbox1">
                        Selecione se é retificação
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/endereco');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/dependentes');
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
