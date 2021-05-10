import * as React from 'react';

import { useRouter } from 'next/router';
import ProgressBar from '../../../core-layout/progress-bar';
import SelectPerson from '../../../../select-person';

export default function FieldsetNonRuralDebtsFinances() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={60} />
              <fieldset>
                <h3>Dívidas</h3>
                <p className="text-muted">
                  Informe aqui os empréstimos e dívidas contraídos pelo seu
                  núcleo familiar em 2020.
                </p>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem tem a dívida?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>

                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="InvestimentType"
                      >
                        Tipo de dívida
                      </label>
                      <select
                        className=" form-control search_select input-edited"
                        required
                      >
                        <option value="TypeOfDebt1">
                          Estabelecimento bancario comercial
                        </option>
                        <option value="TypeOfDebt12">
                          Sociedades de crédito, financiamento e investimento
                        </option>
                        <option value="TypeOfDebt3">
                          Outras pessoas jurídicas
                        </option>
                        <option value="TypeOfDebt4">Pessoas físicas</option>
                        <option value="TypeOfDebt5">
                          Empréstimos contraídos no exterior
                        </option>
                        <option value="TypeOfDebt6">
                          Outras dívidas e ônus reais
                        </option>
                      </select>
                    </div>

                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="DebtDescription"
                      >
                        Descrição do Dívida
                      </label>
                      <textarea
                        id="DebtDescription"
                        className="form-control"
                        placeholder="Descrição"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ValueBeginningYearOfDebt"
                      >
                        Valor no início do ano
                      </label>
                      <input
                        type="text"
                        id="ValueBeginningYearOfDebt"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ValueEndYearOfDebt"
                      >
                        Valor no final do ano
                      </label>
                      <input
                        type="text"
                        id="ValueEndYearOfDebt"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir último recebimento de pessoa jurídica
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      novo recebimento de pessoa jurídica
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/financas/bens-financeiros');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/meus-bens');
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
/*                 <h3>Recuperação IR retido</h3>
                <p className="text-muted">
                Informe aqui os ganhos não isentos em renda variável do seu núcleo familiar em 2020.
                </p>
                <div className="col-sm-6 m-auto">
                  <label className="form-control-placeholder" htmlFor="OptionalDescriptionInvestiment">
          Descrição do investimento
                  </label>
                  <input
                    type="text"
                    id="OptionalDescriptionInvestiment"
                    className="form-control"
                    placeholder="Opcional"
                  />
                </div> */
