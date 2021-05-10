import * as React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import { useRouter } from 'next/router';
import SelectPerson from '../../../select-person';

export default function FieldsetFinancialGainsFinances() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={60} />
              <fieldset>
                <h3>Ganhos Financeiros</h3>
                <p className="text-muted">
                  Informe aqui os ganhos financeiros do seu núcleo familiar em
                  2020, excluindo os ganhos de renda variável NÃO isentos.
                </p>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem teve o ganho?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="VariableIncomesSales"
                      >
                        Tipo do Investimento Ganho em renda variável de venda
                        até R$20.000/mês
                      </label>
                      <select
                        className=" form-control search_select input-edited"
                        required
                      >
                        <option value="VarIncomesSales">
                          Ganho em renda variável de venda até R$20.000/mês
                        </option>
                        <option value="Rendimento de poupança e letra hipotecária">
                          Rendimento de poupança e letra hipotecária
                        </option>
                        <option value="Dividendo de empresa investida">
                          Dividendo de empresa investida
                        </option>
                        <option value="Ganho de venda de moeda estrangeira até US$5.000/ano">
                          Ganho de venda de moeda estrangeira até US$5.000/ano
                        </option>
                        <option value="Ganho em renda fixa">
                          Ganho em renda fixa
                        </option>
                        <option value="Ganho em fundo de renda variável">
                          Ganho em fundo de renda variável
                        </option>
                        <option value="Ganho em renda fixa">
                          Ganho em renda fixa
                        </option>
                      </select>
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Description"
                      >
                        Descrição
                        <br />
                      </label>
                      <input
                        type="text"
                        id="Description"
                        className="form-control"
                        placeholder="Opcional"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="TypeAplication"
                      >
                        Valor do Ganho
                      </label>
                      <input
                        type="text"
                        id="PaidValue"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
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
                    router.push('/2021/despesas/pagamentos-diversos');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/financas/renda-variavel');
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
