import * as React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';
import SelectPerson from '../../select-person';

export default function FieldsetMiscellaneousPaymentsExpenses() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={40} />
              <fieldset>
                <h3>Pagamentos Diversos</h3>
                <p>
                  Informe aqui os demais pagamentos do seu núcleo familiar em
                  2020.
                </p>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem realizou o gasto?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ReceivedPaynment"
                      >
                        Nome de quem recebeu o pagamento*
                      </label>
                      <input
                        type="text"
                        id="ReceivedPaynment"
                        className="form-control"
                        placeholder="Nome"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CNPJCPF"
                      >
                        CPF/CNPJ*
                        <p></p>
                      </label>
                      <input
                        type="text"
                        id="CNPJCPF"
                        className="form-control"
                        placeholder="CPF/CNPJ"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ExpenseType"
                      >
                        Tipo de despesa*
                      </label>
                      <select
                        className=" form-control search_select input-edited"
                        required
                      >
                        <option value="Advogados (honorários relativos a ações judiciais, exceto trabalhistas)">
                          Advogados (honorários relativos a ações judiciais,
                          exceto trabalhistas)
                        </option>
                        <option value="Advogados (honorários relativos a ações judiciais trabalhistas)">
                          Advogados (honorários relativos a ações judiciais
                          trabalhistas)
                        </option>
                        <option value="Advogados (demais honorários)">
                          Advogados (demais honorários)
                        </option>
                        <option value="Engenheiros, Arquitetos e demais profissionais liberais, exceto advogados">
                          Engenheiros, Arquitetos e demais profissionais
                          liberais, exceto advogados
                        </option>
                        <option value="Aluguéis de imóveis">
                          Aluguéis de imóveis
                        </option>
                        <option value="Arrendamento rural">
                          Arrendamento rural
                        </option>
                        <option value="Outros">Outros</option>
                        <option value="Administrador de Imóvel">
                          Administrador de Imóvel
                        </option>
                      </select>
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ExpenseValueMiscPaynments"
                      >
                        Valor da Despesa
                      </label>
                      <input
                        type="text"
                        id="ExpenseValueMiscPaynments"
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
                    router.push('/2021/despesas/imposto-complementar');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/financas');
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
