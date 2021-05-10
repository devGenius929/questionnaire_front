import * as React from 'react';

import { useRouter } from 'next/router';
import ProgressBar from '../../../core-layout/progress-bar';
import SelectPerson from '../../../../select-person';
import SelectCountry from '../../../core-layout/select-country';

export default function FieldsetRuralDebtsFinances() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={60} />
              <fieldset>
                <h3>Dívida Rural</h3>
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
                        País
                      </label>
                      <SelectCountry onChange={(o) => {}} />
                    </div>

                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="OptionalDescription"
                      >
                        Descrição da Dívida
                      </label>
                      <textarea
                        id="OptionalDescription"
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
                    router.push('/2021/financas/dividas');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/financas/bens-financeiros');
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
